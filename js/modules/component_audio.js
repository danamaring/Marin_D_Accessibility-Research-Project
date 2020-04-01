export default {
    template: `
    <!-- Money Heist Trailer -->
    <section>
        <h1>THIS IS SUPPOSED TO BE AN AUDIO</h1>
        <a href="https://www.youtube.com/watch?v=suVQt0pfOLc"></a>
        <figure id="money-heist-trailer-container" class="ozplayer-container">
            <div  data-responsive="money-heist-trailer-container" data-controls="stack" class="ozplayer" id="money-heist-trailer" data-transcript="money-heist-trailer-transcript" >
            <video  controls="controls" preload="none">
            <source src="https://www.youtube.com/watch?v=fvCdLmxnkj0" type="video/x-youtube"></source>
            <track src="money-heist-trailer.vtt" kind="captions" srclang="en" default="default" ></track>
            <!-- <track src="money-heist-trailer.vtt" kind="metadata" data-kind="transcript" srclang="en" ></track> -->
            <div class="ozplayer-fallback"><ul><li><a href="https://www.youtube.com/watch?v=fvCdLmxnkj0">Video for playback</a></li></ul></div>
            </video>
            </div>
            <details class="ozplayer-expander" open="open">
            <summary>Video Transcript</summary>
            <div id="money-heist-trailer-transcript" class="ozplayer-transcript"></div>
            </details>
        </figure>
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