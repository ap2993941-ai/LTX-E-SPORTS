import type { Feature, Screenshot, Review, FaqItem } from './types';
import { 
  FaUserPlus, FaTrophy, FaGamepad, FaSitemap, FaChartLine, FaUserCircle, 
  FaCheckCircle, FaMoneyBillWave, FaStar, FaShieldAlt, FaRobot, FaDatabase,
  FaBullhorn, FaWallet, FaShareAlt, FaQuestionCircle, FaMoneyCheck, FaLaptopCode,
  FaUsers, FaMicrophone, FaUserAstronaut, FaAward, FaStore, FaVideo, FaBinoculars, FaChartPie,
  FaFistRaised, FaUserFriends, FaChartBar, FaTachometerAlt, FaUserSecret, FaHeadset,
  FaComments, FaGift, FaUsersCog, FaBroadcastTower, FaTicketAlt, FaGavel, FaBell, 
  FaFlag, FaLayerGroup, FaCommentDots, FaMapMarkedAlt, FaCrown, FaCode, FaPalette, FaUserShield
} from 'react-icons/fa';
import { IoIosNotifications } from "react-icons/io";

export const logoUrl = 'https://lh3.googleusercontent.com/d/1uL_E_j_ug9i3vL2O65R48Cr2P9u6_brK';

export const downloadUrl = 'https://www.dropbox.com/scl/fi/ss9smbhu54akwwe70cs6c/ALPHA-BATTEL.apk?rlkey=3a0rbctvb9mlj7lu1tog1e32s&st=8xuqvhdp&dl=1';

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Features', href: '#features' },
  { name: 'Screenshots', href: '#screenshots' },
  { name: 'Download', href: '#download' },
  { name: 'Support', href: '#faq' },
];

export const extraFeatures: Feature[] = [
  { icon: FaUserPlus, title: 'Fast Signup' },
  { icon: FaTrophy, title: 'Daily Tournaments' },
  { icon: FaGamepad, title: 'Custom Rooms' },
  { icon: FaSitemap, title: 'Auto-Bracket System' },
  { icon: FaChartLine, title: 'Live Match Tracking' },
  { icon: FaUserCircle, title: 'Player Profile System' },
  { icon: FaCheckCircle, title: 'Verified Winners' },
  { icon: FaMoneyBillWave, title: 'Secure UPI Payouts' },
  { icon: FaStar, title: 'Battle Pass Events' },
  { icon: FaShieldAlt, title: 'Leaderboard Season Rank' },
  { icon: FaUsers, title: 'Team & Clan System' },
  { icon: FaMicrophone, title: 'In-App Voice Chat' },
  { icon: FaUserAstronaut, title: 'Custom Avatars' },
  { icon: FaAward, title: 'Achievement System' },
  { icon: FaFistRaised, title: 'Practice Scrims' },
  { icon: FaUserFriends, title: 'Friend System' },
  { icon: FaChartBar, title: 'Game-Specific Stats' },
  { icon: FaBullhorn, title: 'Community Feed' },
  { icon: FaQuestionCircle, title: 'Help & Support' },
  { icon: FaComments, title: 'Team Chat' },
  { icon: FaGift, title: 'Daily Rewards' },
  { icon: FaBell, title: 'Match Reminders' },
  { icon: FaFlag, title: 'Player Reporting' },
  { icon: FaLayerGroup, title: 'Multi-Game Support' },
  { icon: FaCommentDots, title: 'Tournament Chat' },
];

export const advancedFeatures: Feature[] = [
  { icon: FaLaptopCode, title: 'Real-time Anti-Cheat' },
  { icon: FaRobot, title: 'AI Match Validation' },
  { icon: FaSitemap, title: 'Auto Room Distribution' },
  { icon: FaDatabase, title: 'Live Esports Stats API' },
  { icon: IoIosNotifications, title: 'In-App Notifications' },
  { icon: FaMoneyCheck, title: 'Auto Payout System' },
  { icon: FaWallet, title: 'Secure Encrypted Wallet' },
  { icon: FaShareAlt, title: 'Referral Engine' },
  { icon: FaStore, title: 'Sponsorship Market' },
  { icon: FaVideo, title: 'Automated VODs' },
  { icon: FaBinoculars, title: 'Player Scouting' },
  { icon: FaChartPie, title: 'Advanced Analytics' },
  { icon: FaTachometerAlt, title: 'Organizer Dashboard' },
  { icon: FaUserSecret, title: 'Fraud Detection' },
  { icon: FaHeadset, title: '24/7 Live Support' },
  { icon: FaUsersCog, title: 'Advanced Team Mgmt' },
  { icon: FaBroadcastTower, title: 'Streaming Integration' },
  { icon: FaTicketAlt, title: 'Premium Spectator' },
  { icon: FaGavel, title: 'Dispute Resolution' },
  { icon: FaMapMarkedAlt, title: 'Geofenced Tournaments' },
  { icon: FaCrown, title: 'Subscription Service' },
  { icon: FaCode, title: 'Developer API' },
  { icon: FaPalette, title: 'Customizable Branding' },
  { icon: FaUserShield, title: 'Advanced Moderation' },
];

export const screenshots: Screenshot[] = [
    { id: 1, src: 'https://lh3.googleusercontent.com/d/161jPPwdnMMBUg4sicRQjoelsgLsQ9ZOH', alt: 'App Wallet Screen' },
    { id: 2, src: 'https://lh3.googleusercontent.com/d/1Iv36FoLT-HxGAR3XbF42wRc841klwiYp', alt: 'App Home Screen' },
    { id: 3, src: 'https://lh3.googleusercontent.com/d/1vQqpNnozbg54biDoao31czrkH7MmxHc5', alt: 'App Tournament Details' },
    { id: 4, src: 'https://lh3.googleusercontent.com/d/1bFoCM5zkNZZR2Szjeikm6X2Id9_4zVPZ', alt: 'App Match Details' },
];

export const reviews: Review[] = [
    { id: 1, name: 'CyberKnight', username: '@cyber_k', comment: 'Best tournament app! Payouts are instant as they promised. The UI is just sick.', rating: 5 },
    { id: 2, name: 'ViperX', username: '@viperx_gaming', comment: 'Finally an app with a working anti-cheat. Makes the competition fair and fun.', rating: 5 },
    { id: 3, name: 'ShadowGamer', username: '@shadow_plays', comment: 'Love the daily tournaments. Always something to play. Keep it up LTX E-SPORTS!', rating: 4 },
    { id: 4, name: 'Phoenix', username: '@riseofphoenix', comment: 'The mobile-only tournaments are a game changer. Super smooth experience.', rating: 5 },
];

export const faqItems: FaqItem[] = [
    {
        question: 'How to join tournaments?',
        answer: 'Navigate to the "Tournaments" tab, select a game, choose an upcoming tournament, and click "Join". Make sure your in-game ID is correct in your profile.'
    },
    {
        question: 'How do payouts work?',
        answer: 'Once you win a tournament, the prize money is instantly credited to your LTX E-SPORTS Wallet. You can withdraw it to your UPI or Paytm account from the Wallet section.'
    },
    {
        question: 'Are emulators allowed?',
        answer: 'No. To ensure fair play, our tournaments are strictly mobile-only. Our anti-cheat system will detect and ban emulator users.'
    },
    {
        question: 'How does the referral system work?',
        answer: 'Share your unique referral code with friends. When they sign up and play their first paid tournament, both you and your friend receive a bonus in your LTX E-SPORTS wallets.'
    }
];

export const systemInstruction = `You are LTX CHAT BOT, an expert assistant for the LTX E-SPORTS app. Your sole purpose is to answer questions about the LTX E-SPORTS platform. 
Information about the app: It's a next-gen tournament platform for mobile gamers. 
Key features include: Fast Signup, Daily Tournaments, Custom Rooms, Auto-Bracket System, Live Match Tracking, Player Profiles, Verified Winners, Secure UPI Payouts, Battle Pass, Leaderboards, Team & Clan System, In-App Voice Chat, Custom Avatars, and an Achievement System. 
Advanced features for premium users include: Real-time Anti-Cheat, AI Match Validation, Auto Room Distribution, Live Esports Stats API, In-App Notifications, Auto Payout System, a Secure Wallet, a Referral Engine, a Sponsorship Market, Automated VODs, Player Scouting, Advanced Analytics, and an Organizer Dashboard. 
The platform is mobile-only and does not allow emulators. Payouts are instant to the user's wallet. 
If a user asks a question not related to LTX E-SPORTS, politely decline and state that you can only answer questions about the app. Keep your answers concise and friendly.`;