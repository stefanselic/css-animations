/** @format */

import './2dTransform.css';

export default function TwoDimTransform() {
  return (
    <main>
      <h1>2D - Transforms</h1>
      <div class="grid-container">
        <img class="translate" src="cat.jpg" />
        <img class="scale" src="cat.jpg" />
        <img class="rotate" src="cat.jpg" />
        <img class="skew" src="cat.jpg" />
        <div class="transform-origin" id="left" src="cat.jpg">
          left
        </div>
        <div class="transform-origin" id="right" src="cat.jpg">
          right
        </div>
        <div class="transform-origin" id="top" src="cat.jpg">
          top
        </div>
        <div class="transform-origin" id="bottom" src="cat.jpg">
          bottom
        </div>
        <div class="transform-origin" id="top-right" src="cat.jpg">
          top-right
        </div>
        <div class="transform-origin" id="bottom-left" src="cat.jpg">
          bottom-left
        </div>
        <div class="transform-origin" id="percent" src="cat.jpg">
          percent
        </div>
      </div>
    </main>
  );
}
