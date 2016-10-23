import React from 'react';

export default class extends React.Component {
    render() {
        const { title } = this.props;

        return (
            <div class="col-md-4">
                <h2>{title}</h2>
                <p>
                    Praesent blandit, sapien eget rhoncus vehicula, odio nisi dapibus erat, eget maximus ligula ligula sit amet velit. Aenean vel ipsum id nibh aliquet rhoncus eget eget felis. Nam a molestie neque. In tincidunt erat at mauris cursus aliquam. Mauris et leo ac dui venenatis vulputate. Integer elit elit, vulputate nec scelerisque vitae, eleifend vel nibh.

                    <a class="btn btn-default" href="#">More Info</a>
                </p>
            </div>
        );
    }
}