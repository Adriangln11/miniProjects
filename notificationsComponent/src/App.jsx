import { useState } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/Card'
import ReadMarker from './components/ReadMarker'
import Unread from './components/Unread'

function App() {
  const markAsRead = () => {
    setUnreads(0)
    document.querySelectorAll('.check').forEach(node => node.classList.remove('check'))
  }

  const [unreads, setUnreads] = useState(5)
  return (
    <div className='app'>
      <div className="header-container">
        <Unread unreads={unreads}/>
        <ReadMarker handleClick={markAsRead}/>
      </div>
      <Card 
      name='Mark Webber' 
      url='../src/assets/images/avatar-mark-webber.webp' 
      action='react to your recent post' 
      linkedText='My first tournament today!'
      unread={true}
      when='1m ago'/>
      <Card 
      name='Angela Gray' 
      url='../src/assets/images/avatar-angela-gray.webp' 
      action='followed you'   
      unread={true}
      when='5m ago'/>
      <Card 
      name='Jacob Thompson' 
      url='../src/assets/images/avatar-jacob-thompson.webp' 
      action='has join your group' 
      linkedText='Chess Club'
      unread={true}
      when='1 days ago'/>
      <Card 
      name='Rizky Hasanuddin' 
      url='../src/assets/images/avatar-rizky-hasanuddin.webp' 
      action='sent you a private message' 
      when='5 days ago'
      message='Hello. thanks for setting up the Chess Club. ive  been a member for a few weeks now and im already having lots of fun and improving my game'/>
      <Card 
      name='Kimberly Smith' 
      url='../src/assets/images/avatar-kimberly-smith.webp' 
      action='commented on your picture' 
      linkedImg='../src/assets/images/image-chess.webp'
      when='1 week ago'/>
      <Card 
      name='Nathan Peterson' 
      url='../src/assets/images/avatar-nathan-peterson.webp' 
      action='reacted your recent post 5 end-game strategies to increasse your win rate' 
      when='2 week ago'/>
      <Card 
      name='Anna Kim' 
      url='../src/assets/images/avatar-anna-kim.webp' 
      action='left the group' 
      linkedText='Chess Club'
      when='2 week ago'/>
    </div>
  )
}

export default App
