import React, {Component} from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import AddressModel from '../../models/address';
import style from './mapAdd.css';

export default class MapAdd extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
            address: null
        };
    }

    /**
     * show modal
     */
    show() {
        this.setState({ showModal: true });
    }

    /**
     * hide modal
     */
    hide() {
        this.setState({ showModal: false });
    }

    /**
     * Reset address in state
     */
    resetAddress() {
        this.setState({ address: null });
    }

    /**
     * save address
     */
    saveAddress() {
        if (this.state.address) {
            this.props.onSubmit(this.state.address);
            this.hide();
        } else {
            alert('You have not identified a place!');
        }
    }

    render() {
        return (
            <Modal show={this.state.showModal} onHide={() => { this.hide(); }} onEntered={() => { this.initMap(); }}>
                <Modal.Header closeButton>
                    <Modal.Title>Add address</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input id="pac-input" className="pac-input" type="text" placeholder="Search Box" />
                    <div id="map" className="map">&nbsp;</div>
                    <div>
                    <div>Selected address: {this.state.address ? this.state.address.streetNumber + ' ' + this.state.address.route + ', ' + this.state.address.state + ' ' + this.state.address.postal + ', '+ this.state.address.city + ' ' + this.state.address.country : 'N/A'}</div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button bsStyle="primary" onClick={() => { this.saveAddress(); }}>Save</Button>
                    <Button bsStyle="info" onClick={() => { this.getCurrentLocation(); }}>Get my Location</Button>
                    <Button bsStyle="danger" onClick={() => { this.resetAddress(); }}>Reset</Button>
                    <Button bsStyle="default" onClick={() => { this.hide(); }}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    /**
     * init google map
     */
    initMap() {
        let map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: -33.8688, lng: 151.2195},
            zoom: 13,
            mapTypeId: 'roadmap'
        });
        this.map = map;

        // Create the search box and link it to the UI element.
        let input = document.getElementById('pac-input');
        this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
        let autocomplete = new google.maps.places.Autocomplete(input);
        autocomplete.bindTo('bounds', map);

        // Pick a place from auto complete
        autocomplete.addListener('place_changed', () => {
            // Get the place details from the autocomplete object.
            let place = autocomplete.getPlace();
            this.getPlaceFromMap(place);
            /* jshint ignore:end */
        });

        /* jshint ignore:start */
        let geocoder = new google.maps.Geocoder();
        google.maps.event.addListener(map, 'click', function(event) {
            geocoder.geocode({
                'latLng': event.latLng
            }, function(results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                    if (results[0]) {
                        getPlaceFromMap(results[0]);
                    }
                }
            });
        });
        /* jshint ignore:end */
    }

    /**
     * convert google map's place object to address
     * @param place
     */
    getPlaceFromMap(place) {
        /* jshint ignore:start */
        let fields = {
            'street_number': 'streetNumber',
            route: 'route',
            locality: 'state',
            'administrative_area_level_1': 'city',
            country: 'country',
            'postal_code': 'postal'
        };
        let addr = new AddressModel('', '', '', '', '', '', '');

        /* jshint ignore:start */
        for (let i = 0; i < place['address_components'].length; i++) {
            let addressType = place['address_components'][i].types[0];
            if (fields[addressType]) {
                addr[fields[addressType]] = place['address_components'][i]['long_name'];

            }
        }
        this.setState({
            address: addr
        });
        /* jshint ignore:end */
    }

    /**
     * get current geolocation then convert to address
     */
    getCurrentLocation() {
        navigator.geolocation.getCurrentPosition((position) => {
            let pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            /* jshint ignore:start */
            let infoWindow = new google.maps.InfoWindow;
            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');

            infoWindow.open(this.map);

            this.map.setCenter(pos);
            let geocoder = new google.maps.Geocoder();
            geocoder.geocode({
                'latLng': pos
            }, (results, status) => {
                if (status === google.maps.GeocoderStatus.OK) {
                    if (results[0]) {
                        this.getPlaceFromMap(results[0]);
                    }
                }
            });
            /* jshint ignore:end */
        }, function() {
            alert('Cannot get your location!');
        });
    }
}