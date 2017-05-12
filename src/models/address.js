/**
 * Define Address Model
 */
export default class AddressModel {
    constructor(streetNumber, route, state, city, postal, country) {
        this.streetNumber = streetNumber;
        this.route = route;
        this.state = state;
        this.city = city;
        this.postal = postal;
        this.country = country;
    }
}