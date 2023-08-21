import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main>
      <h1>
        Little House in the Modern World Blog
        <span class="subheading"
          >Where frontier wisdom meets 21st century living</span
        >
      </h1>

      <p class="bold">Welcome to our Blog</p>
      <p>
        Deep within every modern heart, there's a yearning for the warmth of
        simpler times and the profound wisdom of the frontier. Here, in our
        blog, you'll find that rich tapestry of prairie values woven into the
        fabric of today's world. We blend the age-old wisdom of Laura Ingalls
        Wilder's world with insights relevant to our contemporary challenges.
      </p>
      <p class="bold">Featured Articles</p>
      <p>
        🌿 Simplicity in a Digital Age: Lessons from the Prairie Discover ways
        to declutter your digital life, inspired by the minimalism of frontier
        living.
      </p>
      <p>
        🍂 Community Building in Urban Jungles: From Barn Raisings to
        Neighborhood Gatherings Explore how principles from close-knit frontier
        communities can inspire stronger bonds in today's urban environments.
      </p>
      <p>
        🌼 Sustainable Living: Heirloom Techniques for Modern Households Revisit
        time-tested practices from the heartland that can make your modern
        lifestyle more sustainable and eco-friendly.
      </p>
      <p class="bold">Categories</p>
      <ul>
        <li>
          Frontier Traditions: Dive deep into practices and customs that define
          the frontier and learn how they can be adapted to modern settings.
        </li>
        <li>
          Modern Challenges, Prairie Solutions: From work-life balance to
          combating digital fatigue, find out how frontier wisdom can offer
          solutions.
        </li>
        <li>
          Crafts & DIY: Get hands-on with craft ideas and DIY projects inspired
          by the simplicity and resourcefulness of prairie life.
        </li>
        <li>
          Family & Relationships: Drawing parallels between family life on the
          frontier and today, discover insights to strengthen bonds and navigate
          challenges.
        </li>
      </ul>

      <p class="bold">Recent Posts</p>
      <ul>
        <li>
          Balancing Work & Leisure: Lessons from Long Winters and Harvest
          Seasons
        </li>
        <li>The Joy of Handwritten Letters in an Email Era</li>
        <li>Kitchen Wisdom: Frontier-inspired Recipes for Today's Family</li>
        <li>
          From Open Prairies to Open Spaces: Designing with Nature in Mind
        </li>
      </ul>
      <p>Join the Conversation</p>
      <p>
        Your thoughts and stories enrich our community. Every blog post comes
        with a comment section where you can share your insights, memories, and
        experiences. Engage with fellow readers and become an active voice in
        our modern-day prairie community.
      </p>
      <p>
        Subscribe & Stay Updated Never miss a post! Sign up for our newsletter
        and get the latest articles, workshop announcements, and more delivered
        straight to your inbox.
      </p>
      <p>[Subscribe Button]</p>
      <p>
        🌾 Together, let&apos;s rediscover the heart and soul of the frontier,
        adapting its wisdom for the world we live in today.
      </p>
    </main>
  `,
  styleUrls: ['./blog.component.less'],
})
export class BlogComponent {}
