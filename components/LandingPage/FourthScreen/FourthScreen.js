import React from 'react'
import Link from 'next/link'

import { Box, Container, useMediaQuery, useTheme } from '@material-ui/core';

import useStyles from './FourthScreen.style';
import FastTypography from '../../UI/FastTypography'
import FastIcon from '../../UI/FastIcon'
import GraphicsScreen from '../GraphicsScreen/GraphicsScreen'
import GraphicsScreenMobile from '../GraphicsScreen/GraphicsScreenMobile'

const items = [
  {
    title: 'Brands will be spending as much as $15 billion on influencer marketing by 2022',
    beforeLink: 'Get the stats from',
    by: 'Business Insider',
    link: 'https://www.businessinsider.com/influencer-marketing-report',
    src: 'images/case1.jpg'
  },
  {
    title: 'Forbes looked at some of the problems influencer marketing today: bought followers and the upsides of smaller scale influencers',
    beforeLink: 'Read what they had to say on',
    by: 'Forbes',
    link: 'https://www.forbes.com/sites/forbescommunicationscouncil/2018/10/05/the-real-problem-with-influencer-marketing-youre-focusing-on-the-wrong-influencers/#30da512f42d7',
    src: 'images/case2.jpg'
  },
  {
    title: 'Joe Rogan’s podcast will change the game for Spotify',
    beforeLink: 'See more at',
    by: 'The Verge',
    link: 'https://www.theverge.com/2020/5/19/21263927/joe-rogan-spotify-experience-exclusive-content-episodes-youtube',
    src: 'images/case3.jpg'
  },
  {
    title: 'Toy reviews made this eight-year-old a multi-millionaire',
    beforeLink: 'Find out how on',
    by: 'Groove Wallet',
    link: 'https://www.groovewallet.com/ryan-kaji-net-worth/',
    src: 'images/case3.jpeg'
  },
  {
    title: 'Instagram is just now trying to figure out how to monetize for creators',
    beforeLink: 'Read more from',
    by: 'Wired',
    link: 'https://www.wired.com/story/instagram-finally-pay-influencers-badges-igtv-ads/',
    src: 'images/case4.jpg'
  },
  {
    title: 'Valkyrae reveals her YouTube contract means viewership doesn’t matter',
    beforeLink: 'Read more from',
    by: 'Dexerto',
    link: 'https://www.dexerto.com/entertainment/valkyrae-reveals-her-youtube-contract-means-viewership-doesnt-matter-1589393/',
    src: 'images/case10.png'
  },
  {
    title: 'YouTube signs exclusive contract with streamer and content creator Typical Gamer',
    beforeLink: 'Find out how on',
    by: 'Polygon',
    link: 'https://www.polygon.com/2020/3/26/21195607/typical-gamer-youtube-channel-streaming-live-video-exclusive-deal',
    src: 'images/case11.png'
  },
  {
    title: 'Why are streamers leaving Twitch for YouTube? For one obvious reason',
    beforeLink: 'Read more from',
    by: 'Dexerto',
    link: 'https://www.dexerto.com/entertainment/why-are-streamers-leaving-twitch-for-youtube-for-one-obvious-reason-1644377/',
    src: 'images/case12.png'
  },
  {
    title: 'Why top streamers are leaving Twitch',
    beforeLink: 'Read what they had to say on',
    by: 'Washingtonpost',
    link: 'https://www.washingtonpost.com/video-games/2021/09/10/twitch-youtube-drlupo-timthetatman-leave-why/',
    src: 'images/case13.png'
  },
  {
    title: 'Influencer Marketing Spend Grows 83% YoY in North America',
    beforeLink: 'See more at',
    by: 'Talkinginfluence',
    link: 'https://talkinginfluence.com/2019/07/15/influencer-marketing-spend-grows-83-yoy-in-north-america/',
    src: 'images/case14.png'
  },
  {
    title: 'YouTube is a $15 billion-a-year business, Google reveals for the first time',
    beforeLink: 'Get the stats from',
    by: 'Theverge',
    link: 'https://www.theverge.com/2020/2/3/21121207/youtube-google-alphabet-earnings-revenue-first-time-reveal-q4-2019',
    src: 'images/case15.png'
  },
  {
    title: 'Facebook ad revenue tops $16.6 billion, driven by Instagram, Stories',
    beforeLink: 'Get the stats from',
    by: 'Martech',
    link: 'https://martech.org/despite-ongoing-criticism-facebook-generates-16-6-billion-in-ad-revenue-during-q4-up-30-yoy/',
    src: 'images/case16.png'
  },
  {
    title: 'Facebook Posts Revenue Growth Despite Pandemic',
    beforeLink: 'See more at',
    by: 'WSJ',
    link: 'https://www.wsj.com/articles/facebook-fb-2q-earnings-report-2020-11596138406',
    src: 'images/case17.png'
  },
  {
    title: 'One in four millennials say becoming a social media influencer is "very important" to them\n',
    beforeLink: 'See more at',
    by: 'Walesonline',
    link: 'https://www.walesonline.co.uk/news/uk-news/one-four-millennials-say-becoming-17573529',
    src: 'images/case18.png'
  },
  {
    title: 'Content Marketing Software Market by Component (Software and Services), Content Type (Social Media, Blogs, Videos, Infographics), Organization Size (SMEs and Large Enterprises), Industry Vertical, and Region - Global Forecast to 2023',
    beforeLink: 'More info on',
    by: 'Marketsandmarkets',
    link: 'https://www.marketsandmarkets.com/Market-Reports/content-marketing-software-market-264192105.html#:~:text=%5B152%20Pages%20Report%5D%20The%20global,18.4%25%20during%20the%20forecast%20period.',
    src: 'images/case19.png'
  },
  {
    title: 'Retail e-commerce sales worldwide from 2014 to 2024',
    beforeLink: 'See all stats on',
    by: 'Statista',
    link: 'https://www.statista.com/statistics/379046/worldwide-retail-e-commerce-sales/#:~:text=In%202019%2C%20retail%20e%2Dcommerce,most%20popular%20online%20activities%20worldwide.',
    src: 'images/case20.png'
  },
  {
    title: 'Can Facebook Ever Be Fixed?',
    beforeLink: 'See answer at',
    by: 'HBR',
    link: 'https://hbr.org/2019/04/can-facebook-ever-be-fixed',
    src: 'images/case21.png'
  },
  {
    title: 'Formula 1: The esports star beating F1 drivers',
    beforeLink: 'Read more from',
    by: 'BBC',
    link: 'https://www.bbc.com/sport/52159051',
    src: 'images/case22.png'
  },
  {
    title: 'YouTube Will Start Running Ads on Channels That Aren’t Part of Its Revenue-Sharing Program',
    beforeLink: 'Read what they had to say on',
    by: 'Variety',
    link: 'https://variety.com/2020/digital/news/youtube-ads-channels-no-revenue-sharing-1234834816/',
    src: 'images/case23.png'
  },
  {
    title: 'YouTube and Patreon Still Aren’t Paying the Rent for Most Creatives',
    beforeLink: 'More on',
    by: 'Theverge',
    link: 'https://marker.medium.com/if-you-cant-afford-to-do-it-for-free-don-t-be-a-creator-569488f3ef72',
    src: 'images/youtube-patreon.png'
  },
  {
    title: 'Juniper Research: eSports & Games Streaming to be Worth $3.6 Billion Globally by 2025, as Sponsorship Drives Future Growth',
    beforeLink: 'Read More',
    by: 'Businesswire',
    link: 'https://www.businesswire.com/news/home/20210307005021/en/Juniper-Research-eSports-Games-Streaming-to-be-Worth-3.6-Billion-Globally-by-2025-as-Sponsorship-Drives-Future-Growth',
    src: 'images/businesswire.png'
  },
  {
    title: 'Twitch Usage and Growth Statistics: How Many People Use Twitch in 2021?',
    beforeLink: 'View More',
    by: 'Backlinko',
    link: 'https://backlinko.com/twitch-users',
    src: 'images/backlinko.png'
  },
  {
    title: 'Influencer Fatigue: Are We Done with Influencers?',
    beforeLink: 'View More',
    by: 'Linkfluence',
    link: 'https://www.linkfluence.com/blog/influencer-fatigue',
    src: 'images/linkfluence.png'
  },
  {
    title: 'The influencers are burned out, too',
    beforeLink: 'Read More',
    by: 'Vox',
    link: 'https://www.vox.com/the-goods/2021/5/25/22451987/influencer-burnout-tiktok-clubhouse',
    src: 'images/vox.png'
  },
  {
    title: 'Social Media Influencers Struggle With Anxiety Amid Pressure to Create Perfectly Curated Feed',
    beforeLink: 'Read More',
    by: 'Hollywoodreporter',
    link: 'https://www.hollywoodreporter.com/lifestyle/lifestyle-news/social-media-influencers-struggle-anxiety-pressure-create-perfectly-curated-feed-1269805/',
    src: 'images/hollywoodreporter.png'
  },
  {
    title: 'Influencer Marketing: Social media influencer market stats and research for 2021',
    beforeLink: 'Read More',
    by: 'Insiderintelligence',
    link: 'https://www.insiderintelligence.com/insights/influencer-marketing-report/',
    src: 'images/insider.png'
  },
  {
    title: 'The Truth About Patreon',
    beforeLink: 'More on',
    by: 'Youtube',
    link: 'https://www.youtube.com/watch?v=wWBTQszWF60',
    src: 'images/youtube1.png'
  },
  {
    title: 'List of YouTube Demonetized Words REVEALED',
    beforeLink: 'More on',
    by: 'Youtube',
    link: 'https://www.youtube.com/watch?v=oFyHpBsvcK0&list=PL0464485097473A11&index=48',
    src: 'images/youtube2.png'
  },
  {
    title: 'Youtube Copyright Drama (Vlog) | rhinoCRUNCH',
    beforeLink: 'More on',
    by: 'Youtube',
    link: 'https://www.youtube.com/watch?v=dr0Oh-b7GLc&list=PL0464485097473A11&index=12',
    src: 'images/youtube3.png'
  },
  {
    title: 'YouTube Content ID',
    beforeLink: 'More on',
    by: 'Youtube',
    link: 'https://www.youtube.com/watch?v=9g2U12SsRns&list=PL0464485097473A11&index=22',
    src: 'images/youtube4.png'
  },
  {
    title: 'How Facebook is Stealing Billions of Views',
    beforeLink: 'More on',
    by: 'Youtube',
    link: 'https://www.youtube.com/watch?v=t7tA3NNKF0Q&list=PL0464485097473A11&index=25',
    src: 'images/youtube5.png'
  },
  {
    title: 'Facebook Freebooting - Smarter Every Day 128',
    beforeLink: 'More on',
    by: 'Youtube',
    link: 'https://www.youtube.com/watch?v=L6A1Lt0kvMA&list=PL0464485097473A11&index=26',
    src: 'images/youtube6.png'
  },
]

const news = [
  {
    title: 'Featured on Tech Tribune as the best startups in St. Petersburg 2021',
    beforeLink: 'See more at',
    by: 'The Tech Tribune',
    link: 'http://thetechtribune.com/4-best-tech-startups-in-st-',
    src: 'images/techcase.jpg'
  },
  {
    title: 'Galaxis CEO Max Gallardo Discusses the Twitch Competitor\'s Expedited Contract Model',
    beforeLink: 'Read more from',
    by: 'Gamerant',
    link: 'https://gamerant.com/galaxis-ceo-interview-twitch-competitor-contract-model/',
    src: 'images/case6.png'
  },
  {
    title: 'Galaxis CEO Talks Twitch Account Bans and Possible Copyright Strike Solutions',
    beforeLink: 'Read more from',
    by: 'Gamerant',
    link: 'https://gamerant.com/galaxis-ceo-interview-twitch-bans-copyright-strikes/',
    src: 'images/case7.png'
  },
  {
    title: 'Galaxis Interview: CEO Max Gallardo Details Streaming Platform’s Point Systems, Community Moderation, and More',
    beforeLink: 'Read more from',
    by: 'Gamerant',
    link: 'https://gamerant.com/galaxis-interview-ceo-max-gallardo-streaming-platform-point-systems-community-moderation-details/',
    src: 'images/case8.png'
  },
  {
    title: 'Galaxis Interview: CEO Max Gallardo Details Streaming Platform’s Point Systems, Community Moderation, and More',
    beforeLink: 'Read what they had to say on',
    by: 'TheTechTribune',
    link: 'https://thetechtribune.com/4-best-tech-startups-in-st-petersburg/',
    src: 'images/case9.png'
  },
  {
    title: 'Hard Knocks and Sacrifices on the Road to Success; Founder Max Gallardo of Galaxis',
    beforeLink: 'Listen on',
    by: 'Podcasts',
    link: 'https://podcasts.apple.com/us/podcast/hard-knocks-and-sacrifices-on-the-road-to-success/id1500490206?i=1000501130140',
    src: 'images/case5.png'
  },
  {
    title: 'Using Your Why to Make Something Happen; Founder Max Gallardo of Galaxis',
    beforeLink: 'Listen on',
    by: 'Podcasts',
    link: 'https://podcasts.apple.com/us/podcast/using-your-why-to-make-something-happen-founder-max/id1500490206?i=1000501130141',
    src: 'images/case5.png'
  },
]

export default function FourthScreen() {
  const classes = useStyles(); 
  const theme = useTheme();
  const mobileResolution = useMediaQuery(theme.breakpoints.down('md'));

  return(
    <Box className={classes.root}>
      <Container maxWidth="lg">
        <FastTypography data-aos="fade-right" type="h2" weight="bold" className={classes.title}>Who needs galaxis?</FastTypography>
        <FastTypography data-aos="fade-up" weight="thin" noMargin className={classes.listTitle}>You do. Here's why:</FastTypography>
        {mobileResolution ?
          <GraphicsScreenMobile />
        :
          <GraphicsScreen/>
        }
          <Box display="flex" justifyContent="space-between" className={classes.reasons}>
            <Box className={classes.listWrapper}>
              <FastTypography data-aos="fade-up" type="h3" weight="bold" noMargin className={classes.listSubtitle}>Creators</FastTypography>
                <Box data-aos="fade-up" display="flex" alignItems="flex-start"><img src="images/check.png" className={classes.check}/><FastTypography noMargin><b>More transparency.</b> You communicate and negotiate directly with the brands advertising on your content</FastTypography></Box>
                <Box data-aos="fade-up" display="flex" alignItems="flex-start"><img src="images/check.png" className={classes.check}/><FastTypography noMargin><b>More control.</b> No word-based demonetizing, no surprise demonetizations</FastTypography></Box>
                <Box data-aos="fade-up" display="flex" alignItems="flex-start"><img src="images/check.png" className={classes.check}/><FastTypography noMargin>More income sources. Merchandise your brand in-platform and use the Influencer Market to connect with brand sponsors</FastTypography></Box>
                <Box data-aos="fade-up" display="flex" alignItems="flex-start"><img src="images/check.png" className={classes.check}/><FastTypography noMargin><b>More creative freedom.</b> Easily use and pay for unlimited copyrighted material through our automated content market</FastTypography></Box>
                <Box data-aos="fade-up" display="flex" alignItems="flex-start"><img src="images/check.png" className={classes.check}/><FastTypography noMargin><b>More social proof.</b> In-platform shopping and analytics mean you can see exactly how much engagement you can drive and leverage your influence to attract more sponsors</FastTypography></Box>
            </Box>
            <Box className={classes.listWrapper}>
              <FastTypography data-aos="fade-up" type="h3" weight="bold" noMargin className={classes.listSubtitle}>Businesses</FastTypography>
              <Box data-aos="fade-up" display="flex" alignItems="flex-start"><img src="images/check.png" className={classes.check}/><FastTypography noMargin><b>More connections.</b> Find influencers in your market with proven stats and communicate with them directly</FastTypography></Box>
              <Box data-aos="fade-up" display="flex" alignItems="flex-start"><img src="images/check.png" className={classes.check}/><FastTypography noMargin><b>More accurate placements.</b> You decide when and where your content is displayed, working with creators who know their audience</FastTypography></Box>
              <Box data-aos="fade-up" display="flex" alignItems="flex-start"><img src="images/check.png" className={classes.check}/><FastTypography noMargin><b>More sales.</b> ​In-platform 1-click shopping means higher conversion rates (no more distance between content and purchasing)</FastTypography></Box>
              <Box data-aos="fade-up" display="flex" alignItems="flex-start"><img src="images/check.png" className={classes.check}/><FastTypography noMargin><b>More complete data​.</b> Integrated e-commerce means, solid analytics and live ROI</FastTypography></Box>
              <Box data-aos="fade-up" display="flex" alignItems="flex-start"><img src="images/check.png" className={classes.check}/><FastTypography noMargin><b>More impactful branding.</b>  Highly customizable online shops allow brands to create an on-brand, fully themed user experience unparalleled by any other social platform</FastTypography></Box>
            </Box>
          </Box>
          <FastTypography data-aos="fade-up" weight="thin" noMargin className={classes.listTitle}>With clear and direct communication between influencers and brands, 1-click shopping, and a data set that won’t quit, Galaxis is a ​<b>win-win-win​</b> for creators, companies, and consumers.</FastTypography>
          <div class="MuiBox-root jss499 jss495 jss496" id="ecosystem">
          {/* <FastTypography data-aos="fade-up" type="h2" weight="bold" className={classes.h3}>Ecosystem:</FastTypography>
          <FastTypography data-aos="fade-up" weight="thin" noMargin className={classes.listTitle}>The purpose of this ecosystem is to have a decentralized platform where we can do all social, commerce, advertising, and content consumption activity while having a secure system that works for everyone. Galaxis purpose is to digitize every company and offer and endless amount of online work through the help of content, advertising and ecommerce. This will create a revolving cycle which we refer to as the ecosystem.</FastTypography>
          <img data-aos="fade-up" className={classes.ecosystem} src="images/ecosystem.png" /> */}
          </div>
        <FastTypography data-aos="fade-up" type="h2" weight="bold" className={classes.h3}>Case Studies:</FastTypography>

        {
          items.map((item, index) => (
            <Box className={classes.item} key={index}>
              <img className={classes.itemImg} src={item.src} alt="" data-aos="fade-right"/>
              <Box className={classes.description}>
                <FastTypography data-aos="fade-up" type="h4" weight="bold" noMargin>
                  {item.title}
                </FastTypography>
                <FastTypography data-aos="fade-up" weight="thin" noMargin className={classes.itemSubtitle}>
                  {item.beforeLink}&nbsp;
                  <a target="_blank" href={item.link}>{item.by}</a>
                </FastTypography>
              </Box>
            </Box>
          ))
        }

<FastTypography data-aos="fade-up" type="h2" weight="bold" className={classes.h3}>FEATURED ON:</FastTypography>

{
  news.map((item, index) => (
    <Box className={classes.item} key={index}>
      <img className={classes.itemImg} src={item.src} alt="" data-aos="fade-right"/>
      <Box className={classes.description}>
        <FastTypography data-aos="fade-up" type="h4" weight="bold" noMargin>
          {item.title}
        </FastTypography>
        <FastTypography data-aos="fade-up" weight="thin" noMargin className={classes.itemSubtitle}>
          {item.beforeLink}&nbsp;
          <a target="_blank" href={item.link}>{item.by}</a>
        </FastTypography>
      </Box>
    </Box>
  ))
}

      </Container>
    </Box>
  )
}