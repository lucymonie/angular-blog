import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main>
      <h1>About 'Little House in the Modern World'</h1>
      <p class="bold">Bridging Generations with Timeless Lessons</p>
      <p>
        Welcome to 'Little House in the Modern World,' a unique space where the
        timeless wisdom of the frontier meets the challenges and wonders of the
        21st century.
      </p>
      <p class="bold">Our Origins</p>
      <p>
        Drawing inspiration from the writings and experiences of Laura Ingalls
        Wilder, our site seeks to encapsulate the strength, simplicity, and
        sincerity of life on the American frontier. Laura's stories, rich in
        life lessons from the heartland, serve as our foundation.
      </p>
      <p class="bold">Our Vision</p>
      <p>
        In a rapidly changing world filled with technological marvels and urban
        complexities, there's a profound need to reconnect with the earthy and
        fundamental truths that guided generations before us. 'Little House in
        the Modern World' strives to be that bridge, making the wisdom of the
        prairie relevant and applicable to contemporary challenges.
      </p>
      <p class="bold">What We Offer</p>
      <ul>
        <li>
          <span class="bold">Modern Frontier Blog:</span> Dive deep into
          articles that apply prairie wisdom to everything from sustainable
          living and community building to finding simplicity amidst digital
          chaos.
        </li>
        <li>
          <span class="bold">Heartland Workshops:</span> Participate in virtual
          and (hopefully soon) in-person workshops that provide hands-on
          experiences. Learn skills like crafting, canning, sustainable
          gardening, and more, all with a modern twist.
        </li>
        <li>
          <span class="bold">Book Club:</span> Join our monthly discussions as
          we delve into the 'Little House' series and other literature that
          intersects frontier values and modern life.
        </li>
      </ul>

      <p class="bold">Our Community</p>
      <p>
        We believe in the power of community, just as Laura did. We invite
        readers, dreamers, and doers from all walks of life to share, learn, and
        grow together in this unique space. Your stories, insights, and
        experiences fuel the spirit of 'Little House in the Modern World.'
      </p>
      <p class="bold">Connect With Us</p>
      <p>
        The frontier spirit is all about forging connections. Whether it's a
        question, a story to share, or feedback on our content, we'd love to
        hear from you.
      </p>
      <p>
        Thank you for being a part of our journey. Here's to bridging
        generations and embracing timeless lessons to illuminate our path
        forward.
      </p>
      <p>Warmly,</p>
      <p>The 'Little House in the Modern World' Team.</p>
    </main>
  `,
  styleUrls: ['./about.component.less'],
})
export class AboutComponent {}
