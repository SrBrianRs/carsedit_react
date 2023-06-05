import '../styles/reactions.css';
import KafkaService from "../services/kafka.service";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReactionsComponent = ({ id }) => {
  const [likeCount, setLikeCount] = useState(0);
  const [loveCount, setLoveCount] = useState(0);
  const [hahaCount, setHahaCount] = useState(0);
  const [angryCount, setAngryCount] = useState(0);
  const [sadCount, setSadCount] = useState(0);
  const [wowCount, setWowCount] = useState(0);
  const uri = "https://api-reac-comment-service-kafka-srbrianrs.cloud.okteto.net/api/reactions";

  useEffect(() => {
    const fetchReactions = async () => {
      try {
        const responseLike = await axios.get(`${uri}/${id}/like`);
        const likeCount = responseLike.data ? responseLike.data.n : 0;
        const responseLove = await axios.get(`${uri}/${id}/love`);
        const loveCount = responseLove.data ? responseLove.data.n : 0;
        const responseAngry = await axios.get(`${uri}/${id}/angry`);
        const angryCount = responseAngry.data ? responseAngry.data.n : 0;
        const responseWow = await axios.get(`${uri}/${id}/wow`);
        const wowCount = responseWow.data ? responseWow.data.n : 0;
        const responseHaha = await axios.get(`${uri}/${id}/haha`);
        const hahaCount = responseHaha.data ? responseHaha.data.n : 0;
        const responseSad = await axios.get(`${uri}/${id}/sad`);
        const sadCount = responseSad.data ? responseSad.data.n : 0;

        setLikeCount(likeCount);
        setLoveCount(loveCount);
        setAngryCount(angryCount);
        setWowCount(wowCount);
        setHahaCount(hahaCount);
        setSadCount(sadCount);
      } catch (error) {
        console.log('Error al obtener las reacciones:', error);
      }
    };

    fetchReactions();
  }, [id]);

  const reaction = (e, status) => {
    const user = localStorage.getItem('user');
    const data = {
      userId: user,
      objectId: id,
      reactionId: status
    };

    console.log(JSON.stringify(data));
    KafkaService.reactionPush(data);
    e.preventDefault();
  };

  return (
    <div className="reactions">
      <div className="reaction reaction-like" onClick={(e) => {
        e.preventDefault();
        reaction(e, "like");
      }}>
        <tool-tip>{likeCount}</tool-tip>
      </div>

      <div className="reaction reaction-love" onClick={(e) => {
        e.preventDefault();
        reaction(e, "love");
      }}>
        <tool-tip>{loveCount}</tool-tip>
      </div>

      <div className="reaction reaction-haha" onClick={(e) => {
        e.preventDefault();
        reaction(e, "haha");
      }}>
        <tool-tip>{hahaCount}</tool-tip>
      </div>

      <div className="reaction reaction-wow" onClick={(e) => {
        e.preventDefault();
        reaction(e, "wow");
      }}>
        <tool-tip>{wowCount}</tool-tip>
      </div>

      <div className="reaction reaction-sad" onClick={(e) => {
        e.preventDefault();
        reaction(e, "sad");
      }}>
        <tool-tip>{sadCount}</tool-tip>
      </div>

      <div className="reaction reaction-angry" onClick={(e) => {
        e.preventDefault();
        reaction(e, "angry");
      }}>
        <tool-tip>{angryCount}</tool-tip>
      </div>
    </div>
  );
};

export default ReactionsComponent;
