import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {io} from 'socket.io-client';

const socket = io.connect('http://10.0.0.191:3000');

export default function useSocket() {
  const [isLoading, setIsLoading] = useState(false);
  const [newData, setNewData] = useState([]);

  socket.on('ReciepeTrigger', data => {
    setNewData(data);
  });

  useEffect(() => {
    return () => {};
  }, []);

  return {newData, isLoading, Socketid: socket.id, socket};
}
