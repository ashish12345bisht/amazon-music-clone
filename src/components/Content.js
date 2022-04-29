import React from 'react';
import ContentBanner from './ContentBanner';
import '../styles/Content.css'
import ContentCard from './ContentCard';

function Content() {
  return (
    <div>
        <ContentBanner/>
        <ContentCard/>
    </div>
  )
}

export default Content