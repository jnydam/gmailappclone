import React from 'react';
import InboxHorizDetailComp from './InboxHorizDetailComp/InboxHorizDetailComp';

import styles from './LowerInboxListComp.module.css';

const LowerInboxListComp = (props) => {

    const sampleEmails = [
        {
            sender: 'Amazon.com',
            subject: 'A recent order, tracking number #1234',
            timeStamp: '1:27 PM',
            description: 'Hi, John. Attached is your most recent order. Please click the link to find more details'
        },
        {
            sender: 'Twitter.com',
            subject: 'Your recent news feed',
            timeStamp: 'Jul 19',
            description: `See the latest news feed. If you would like to unsubscribe from further emails, please click
            the link located down below`
        },
        {
            sender: 'Google.com',
            subject: 'The latest from Google',
            timeStamp: 'Jul 18',
            description: 'It\'s been an interesting day. Click through the various links to find more news relevant for today'
        }
    ]

    return (<div className={styles.lowerInboxListCompContainer}>
        {sampleEmails.map((sampleEmail) => (
            <InboxHorizDetailComp
                sender={sampleEmail.sender}
                subject={sampleEmail.subject}
                timeStamp={sampleEmail.timeStamp}
                description={sampleEmail.description}></InboxHorizDetailComp>
        ))}
    </div>)
}

export default LowerInboxListComp;