/** @format */

import { Facebook } from 'lucide-react';
import './CreativeExamples.css';
import { Twitter } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Youtube } from 'lucide-react';
import { Linkedin } from 'lucide-react';
export default function CreativeExamples() {
  return (
    <main class="main-container">
      <div class="example-1-container">
        <ul>
          <li>S</li>
          <li>M</li>
          <li>O</li>
          <li>K</li>
          <li>Y</li>
        </ul>
      </div>
      <div class="example-2-container">
        <h1>text</h1>
      </div>
      <div class="example-3-container">
        <a class="icon" href="#">
          <i>
            <Facebook />
          </i>
        </a>
        <a class="icon" href="#">
          <i>
            <Twitter />
          </i>
        </a>
        <a class="icon" href="#">
          <i>
            <Linkedin />
          </i>
        </a>
        <a class="icon" href="#">
          <i>
            <Instagram />
          </i>
        </a>
        <a class="icon" href="#">
          <i>
            <Youtube />
          </i>
        </a>
      </div>
      <br />
      <div class="example-4-container">
        <span class="rotated"></span>
        <h1>
          CSS
          <br />
          <span>border</span>
          <br />
          hover
          <br />
          effect
        </h1>
      </div>
      <br />
      <div class="example-5-container">
        <ul>
          <li>clo</li>
          <li>
            <span>s</span>
            <span>e</span>
          </li>
        </ul>
      </div>
      <br />
      <div class="example-6-container">
        <section>
          <h2>Focus</h2>
          <img src="bg.jpg" />
        </section>
      </div>
      <div class="example-7-container">
        <h2>
          <span>
            <i>F</i>
          </span>
          <span>
            <i>O</i>
          </span>
          <span>
            <i>C</i>
          </span>
          <span>
            <i>U</i>
          </span>
          <span>
            <i>S</i>
          </span>
        </h2>
      </div>
    </main>
  );
}
