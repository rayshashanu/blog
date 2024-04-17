import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Travel = () => {
  // const dispatch = useDispatch();
  // const  navigate = useNavigate();

  // const handleSubmit = async (e) => {

  //   try {
  //     const response = await axios.post('http://localhost:2000/travel');
  //     const { firstName } = response.data;
  //     dispatch({ type: 'SET_USER', payload: firstName }); 
  //      if(response.data) {
  //       navigate('/');
  //      }       
  //   } catch (error) {
  //     console.error('Login failed', error);
  //   }
  // };

  // const redirecter = () => {
  //   navigate('/register');
  // }

  return (
    <center>
    <div style={{backgroundColor:'beige'}}>
      <h1>GODDESS CURRY CHICKEN SALAD</h1> 
      <p>This Curry Chicken Salad is super clean and SO delicious. Loaded with spiced chicken, golden raisins, pistachios, herbs, and Greek yogurt + olive oil as a stand-in for mayo.</p>
      <img src='new8.jpg' width={'400px'}/>
      <p>This is not your ordinary curry chicken salad. it’s a GODDESS CURRY CHICKEN SALAD. Which basically just means I feel like the summer goddess of health and wellness when I eat this. Especially on an everything bagel. So, yes, my definitely of health and wellness goes a little bit outside the box sometimes.

       This really isn’t all that different from a regular curry chicken salad, except no fruit, none of this apples or grapes or blueberries business – and no mayo. As you have seen from my love of Wild Rice Burgers, I have a healthy love and respect for good old fashioned mayonnaise. But if we’re getting into the summer goddess zone? Goodbye, mayo. Greek yogurt feels like such a basic stand-in, but that’s because it works. It’s good. It is thick, creamy, and the added tang is a welcome addition to this salad, IMHO.

       Real Chicken Talk: THIS CHICKEN, you guys. I will never make another kind of chicken for salad toss-ins. I cut it in half horizontally, so the pieces were super thin, and then I loaded them with garlic powder, onion powder, curry powder, salt, and pepper. Sautéed in a little olive oil, and MWAH. Best quick chicken ever. I even let it get a little extra browned on the outside because I play by my own rules.
       </p>   
      </div>
    </center>
  );
};

export default Travel;
