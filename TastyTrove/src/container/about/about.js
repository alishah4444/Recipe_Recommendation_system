import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default function About() {
  // State to track the visibility of each FAQ answer
  const [faqVisibility, setFaqVisibility] = useState({
    faq1: false,
    faq2: false,
    faq3: false,
  });

  // Function to toggle the visibility of a specific FAQ answer
  const toggleFaqVisibility = faqKey => {
    setFaqVisibility(prevState => ({
      ...prevState,
      [faqKey]: !prevState[faqKey],
    }));
  };

  return (
    <View>
      <TouchableOpacity onPress={() => toggleFaqVisibility('faq1')}>
        <Text>1. Need to change the email address?</Text>
      </TouchableOpacity>
      {faqVisibility.faq1 && (
        <Text style={{marginLeft: 10}}>Answer to FAQ 1</Text>
      )}

      <TouchableOpacity onPress={() => toggleFaqVisibility('faq2')}>
        <Text>2. Need to add content to recipe?</Text>
      </TouchableOpacity>
      {faqVisibility.faq2 && (
        <Text style={{marginLeft: 10}}>Answer to FAQ 2</Text>
      )}

      <TouchableOpacity onPress={() => toggleFaqVisibility('faq3')}>
        <Text>Need to contact customer associate?</Text>
      </TouchableOpacity>
      {faqVisibility.faq3 && (
        <Text style={{marginLeft: 10}}>Answer to FAQ 3</Text>
      )}
    </View>
  );
}
