import React from 'react'

export default class extends React.Component {
    render() {
        const { title } = this.props;

        return (
            <div class="col-md-4">
                <h2>{title}</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pellentesque ex neque, bibendum venenatis turpis mattis non.
                    Sed sollicitudin imperdiet magna non blandit. Praesent ut lacus neque. In at vehicula ipsum.
                    Nam tempor est eu bibendum tempus. Sed sem diam, tincidunt id nisi non, imperdiet consectetur nisl.
                    Praesent ut augue consequat ipsum blandit volutpat eget quis est.

                    <a class="btn btn-default" href="#">More Info</a>
                </p>
            </div>
        );
    }
}