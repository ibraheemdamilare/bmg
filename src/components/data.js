    import {MdAddModerator, MdDeveloperMode, MdDesignServices} from 'react-icons/md'
    import {TiSocialTwitter} from 'react-icons/ti'
const data = [
    {
        id: 1,
        heading: 'Professional Moderators',
        body: 'We have a team of experienced moderators that will keep your community and server engaged and make it active all through the day.',
        pics: <MdAddModerator color='blue'/>,
        btn: 'GET IN TOUCH'
    },
    {
        id: 2,
        heading: 'Social Media Shillers',
        body: "Our team of shillers are professionals and we increase the hype of our clients' project on social media which include twitter, reddit, youtube, discord and a host of others.",
        pics: <TiSocialTwitter color='blue' />,
        btn: 'GET IN TOUCH'
    },
    {
        id: 3,
        heading: 'Web Developers',
        body: "Our team of professional website developer also render the service of developing bespoke websites for our clients' whitepaper and other website needs. You can be rest assured of quality job when you demand for our services.",
        pics: <MdDeveloperMode color='blue' />,
        btn: 'GET IN TOUCH'
    },
    {
        id: 4,
        heading: 'Graphics Designer',
        body: 'Our team of graphics designers are the best in the game. When you hire us, you can be rest assured that the graphics design of your project is in secure hands.',
        pics: <MdDesignServices color='blue' />,
        btn: 'GET IN TOUCH'
    }
]

export default data;