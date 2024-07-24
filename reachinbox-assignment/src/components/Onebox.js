import React, { useEffect, useState } from 'react';
import { fetchMails, deleteThread, replyThread } from '../api';

const Onebox = ({ token }) => {
  const [mails, setMails] = useState([]);
  const [selectedThread, setSelectedThread] = useState(null);
  const [replyContent, setReplyContent] = useState('');

  useEffect(() => {
    const getMails = async () => {
      const response = await fetchMails();
      setMails(response.data);
    };

    getMails();
  }, []);

  const handleDelete = async (threadId) => {
    await deleteThread(threadId);
    setMails(mails.filter(mail => mail.id !== threadId));
  };

  const handleReply = async () => {
    await replyThread(selectedThread.id, { body: replyContent });
    setReplyContent('');
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'D' && selectedThread) {
        handleDelete(selectedThread.id);
      } else if (event.key === 'R') {
        document.getElementById('replyBox').focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedThread]);

  return (
    <div className="onebox-container">
      <h1>Onebox</h1>
      <ul>
        {mails.map(mail => (
          <li key={mail.id} onClick={() => setSelectedThread(mail)}>
            {mail.subject}
          </li>
        ))}
      </ul>
      {selectedThread && (
        <div>
          <h2>{selectedThread.subject}</h2>
          <div>{selectedThread.body}</div>
          <textarea id="replyBox" value={replyContent} onChange={(e) => setReplyContent(e.target.value)} />
          <button onClick={handleReply}>Send Reply</button>
        </div>
      )}
    </div>
  );
};

export default Onebox;
