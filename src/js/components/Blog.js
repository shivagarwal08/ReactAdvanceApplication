import React from 'react'

export default class extends React.Component {
    render() {
        const { title } = this.props;

        return (
            <div class="col-md-4">
                <h2>{title}</h2>
                <p>
                    Aenean a mollis nulla, eget consectetur libero. Suspendisse imperdiet purus ligula, porta sagittis turpis lacinia vel. Ut hendrerit lectus ac nisl convallis, sit amet interdum ex scelerisque. Suspendisse pulvinar libero nec diam pellentesque, in lobortis erat egestas. Fusce purus est, tincidunt sit amet placerat at, porttitor eleifend massa.

                    <a class="btn btn-default" href="#">More Info</a>
                </p>
            </div>
        );
    }
}