import React from "react";
import { FaHome } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import buddhabar from "../../Assets/work-images/buddhabar.jpg";
import partybusnepal from "../../Assets/work-images/partybusnepal.jpg";
import wave from "../../Assets/work-images/wave.jpg";
import woodland from "../../Assets/work-images/woodland.jpg";

const Timeline = () => {
  return (
    <>
      <VerticalTimeline>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date='2016'
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaHome />}
        >
          <h3 className='vertical-timeline-element-title'>
            Advanced DJing course
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>Tutor: DJ Azen</h4>
          <p>DJing training - 6 months</p>
          <p>
            Under DJ Azen's mentorship, I completed an intensive 6-month
            advanced DJing course. From mastering mixing techniques to refining
            crowd engagement, his guidance elevated my skills and deepened my
            passion for music. This made me ready to bring electrifying energy
            to any event!
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='2016 - 2017'
          contentStyle={{ background: "transparent", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaHome />}
        >
          <h3 className='vertical-timeline-element-title'>Resident DJ</h3>
          <a href='https://www.facebook.com/clubwoodland/' target='_blank'>
            <h4 className='vertical-timeline-element-subtitle'>
              Club Woodland
            </h4>
          </a>
          <img
            style={{ width: "100%" }}
            src={woodland}
            className='my-2'
            alt='DJ R3SUB on Club Woodland'
          />
          <p>
            During my time at Club Woodland, I crafted electrifying nights
            featuring diverse music styles. As a resident DJ specializing in an
            open format, I seamlessly blended commercial hits, EDM anthems, and
            various genres to keep the dance floor alive. Whether pumping up the
            crowd with high-energy tracks or setting vibes with soulful beats,
            my sets were designed to make every moment unforgettable.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='2017 - 2019'
          contentStyle={{ background: "transparent", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaHome />}
        >
          <h3 className='vertical-timeline-element-title'>Resident DJ</h3>
          <a
            href='https://www.facebook.com/profile.php?id=61554950939934'
            target='_blank'
          >
            <h4 className='vertical-timeline-element-subtitle'>
              Wave Lounge Club and Bar
            </h4>
          </a>
          <img
            src={wave}
            className='my-2'
            style={{ width: "100%" }}
            alt='DJ R3SUB on Wave Lounge'
          />
          <p>
            As Resident DJ at Wave Lounge Club and Bar, I refined my skills and
            curated energetic sets, drawing from diverse genres like EDM,
            hip-hop, and house. This experience was pivotal in shaping my DJing
            style and igniting the dance floor with electrifying vibes.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='2019 - 2021'
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaHome />}
          contentStyle={{ background: "transparent", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        >
          <h3 className='vertical-timeline-element-title'>
            Resident DJ & Graphics Designer
          </h3>

          <a href='https://www.facebook.com/partybusnepal' target='_blank'>
            <h4 className='vertical-timeline-element-subtitle'>
              Party Bus Nepal
            </h4>
          </a>
          <img
            style={{ width: "100%" }}
            src={partybusnepal}
            alt='DJ R3SUB on Party bus nepal'
            className='my-2'
          />
          <p>
            Working at Party Bus Nepal, operated by RESS Nepal Pvt. Ltd., was a
            unique experience in Nepal's entertainment scene. As the
            first-of-its-kind in Nepal and possibly in South Asia, Party Bus
            Nepal redefined partying with its luxurious interior, professional
            DJ setup, fully equipped bar, and dance floor. During my tenure, I
            curated high-energy sets featuring genres like hip hop, trance,
            techno, house, and more, bringing electrifying vibes to this
            innovative mobile party venue. Additionally, I contributed as a
            graphics designer, creating flyers and other designs to promote our
            exciting events. It was an exhilarating chapter that expanded my
            creative horizons and revolutionized nightlife entertainment in
            Nepal.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='2021 - present'
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaHome />}
          contentStyle={{ background: "transparent", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        >
          <h3 className='vertical-timeline-element-title'>Resident DJ</h3>

          <a
            href='https://www.instagram.com/buddhabar_kathmandu'
            target='_blank'
          >
            <h4 className='vertical-timeline-element-subtitle'>
              Buddha Bar Thamel
            </h4>
          </a>
          <img
            style={{ width: "100%" }}
            src={buddhabar}
            alt='DJ R3SUB on Buddha Bar Thamel'
            className='my-2'
          />
          <p>
            As a Resident DJ at Buddha Bar Thamel, I curate an ambient
            atmosphere with chill, afrobeats, amapiano, R&B, jazz, soul, disco,
            funk, reggae, electronic, and house music. The bar's sophisticated
            setting and vibrant music selection offer patrons a unique
            experience in the heart of Kathmandu. From laid-back evenings to
            energetic weekend nights, my curated playlists complement the bar's
            exotic cocktails and create an unforgettable journey through music.
            I perform 5-hour DJ sets on weekdays, blending these diverse genres
            to create a captivating atmosphere for guests to enjoy.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
};

export default Timeline;
