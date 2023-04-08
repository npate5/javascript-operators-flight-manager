function Flights() {
    function calculateNumberOfFlights(passengers, capacity) {
        let flights;

        if ((passengers < 0) || (!Number.isInteger(Number(passengers)))) {
            throw new Error("The number of passengers must be a positive integer value")
        }

        if (passengers % capacity == 0) {
            flights = passengers/capacity;
        } else {
            flights = Math.floor(passengers/capacity) + 1;
        }

        return flights;
    }
    return {calculateNumberOfFlights};
}

module.exports = Flights();



