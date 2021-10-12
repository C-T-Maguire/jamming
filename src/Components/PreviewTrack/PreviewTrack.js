import React from "react";
import './PreviewTrack.css';


class PreviewTrack extends React.Component {
    constructor(props) {
        super(props);

        this.renderPreview = this.renderPreview.bind(this);
        this.playAudio = this.playAudio.bind(this);
    }

    //function to update state?

    renderPreview() {
        return (
            <audio controls ref='audio' >
                <source src={this.props.previewUrl} />
            </audio>
        )
    }

    playAudio() {
        this.refs.audio.pause();
        this.refs.audio.load();
        this.refs.audio.play();
    }

    componentDidUpdate(prevProps) {
        if(prevProps.previewUrl !== this.props.previewUrl) {
            console.log('changed');
            this.playAudio();
        } else {
            return;
        }
    }


    render() {
        return (
            <div className="PreviewTrack">
                {this.renderPreview()}
            </div>
        )
    }
}

export default PreviewTrack;