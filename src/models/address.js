/**
 * Define Address Model
 */
export default class AddressModel {
    constructor(id, streetNumber, route, state, city, postal, country) {
        this.id = id || '';
        this.streetNumber = streetNumber || '';
        this.route = route || '';
        this.state = state || '';
        this.city = city || '';
        this.postal = postal || '';
        this.country = country || '';
    }
}