export default {
    template: `
    <!-- Frozen II Trailer -->
    <section id="pets-trailer-section">
        <h1>Link to Frozen II Trailer:</h1>
        <a href="https://www.youtube.com/watch?v=suVQt0pfOLc"></a>
        <figure id="frozen-trailer-container" class="ozplayer-container">
            <div  data-responsive="frozen-trailer-container" data-controls="stack" class="ozplayer" id="frozen-trailer" data-transcript="frozen-trailer-transcript" >
            <video  controls="controls" preload="none">
            <source src="https://www.youtube.com/watch?v=suVQt0pfOLc" type="video/x-youtube"></source>
            <track src="frozen-trailer-captions.vtt" kind="captions" srclang="en" default="default" ></track>
            <!-- <track src="frozen-trailer-captions.vtt" kind="metadata" data-kind="transcript" srclang="en" ></track> -->
            <div class="ozplayer-fallback"><ul><li><a href="https://www.youtube.com/watch?v=suVQt0pfOLc">Video for playback</a></li></ul></div>
            </video>
            </div>
            <details class="ozplayer-expander" open="open">
            <summary>Video Transcript</summary>
            <div id="frozen-trailer-transcript" class="ozplayer-transcript"></div>
            </details>
        </figure>
        <br><br>
    </section>
    `,

    created: function() {
        console.log('our component1 redered');
    },

    data: function() {
        return {
            message: "Component 1"
        }
    }
}