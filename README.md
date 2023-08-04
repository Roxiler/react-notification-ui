The react-notification-ui library helps you in displaying notification in beautiful and easy way.

# Table of contents

1. [Installation](#installation)
2. [Demo](#demo)
3. [Basic Usage](#basic-usage)

# Installation

- Using NPM
  `npm i react-notification-ui`

- Using Yarn
  `yarn add react-notification-ui`

# Demo

https://stackblitz.com/edit/react-notification-ui

# Code example

https://github.com/Roxiler/react-notification-ui/blob/main/src/App.tsx

## Checkout below gif.

![](https://i.ibb.co/khjDzw6/ezgif-com-video-to-gif.gif)

# Basic Usage of Notify

- Demo 1 : For Predefined card data need data in this format :

  ```
  import { Notify } from 'react-notification-ui';

  const data = [
    {
      image: 'https://reqres.in/img/faces/1-image.jpg',
      title: 'Aryan Ty',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, cumque!',
      time: '2 days',
    },
    {
      image: 'https://reqres.in/img/faces/2-image.jpg',
      title: 'Aryan Tirkey',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, cumque!',
      time: '1 days',
    },
    {
      image: 'https://reqres.in/img/faces/3-image.jpg',
      title: 'Roxiler System',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, cumque!',
      time: '1 days',
    },
    {
      image: 'https://reqres.in/img/faces/4-image.jpg',
      title: 'Jhon Doe',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, cumque!',
      time: '10 sec',
    },
  ];

  export default function App() {
    return (
      <div>
        <Notify data={data} />
      </div>
    );
  }
  ```

- For theme, number of card shown and hiding count indicator :

  ```
  <Notify data={data} theme="dark" maxCardShown={3} hideCount />
 
  ```

- For passing CustomIcon, CustomButton, CustomCard and custom data : 

  ```
  <Notify data={data} customButton={<CustomButton/>} customCard={<CustomCard/>} customIcon={<CustomIcon/>} />

  const CustomCard = (e) => {
      return <div onClick={e.onClick}>{e.data.title}</div>
  }

  const CustomIcon = () => {
      return <div><img src /></div>
  }

  const CustomButton = (e) => {
      return <button>{e.label}</button>
  }

  ```

- changing position and transition , while position change cardPosition and transformOrigin are required :

  ```
  <Notify data={data} cardPosition="top"  transformOrigin={x:"top", y:"top"}/>
  
  ```


  ## props

| Accepted props           | type           | Description                                                                  |
| ------------------------ | -------------- | ---------------------------------------------------------------------------- |
| cardPosition             | string         | sets card position like "left","right","top","bottom"                        |
| transformOrigin          | object         | with combination of cardPosition this is used to set origin position x and y |
| hideCount                | boolean        | set card count visible or hidden, by default its false                       |
| notificationCountVariant | string         | set notification count variant                                               |
| customIcon               | ReactNode      | pass custom icon component                                                   |
| customCard               | ReactNode      | pass custom card component                                                   |
| cardProps                | object         | sets card style , variant and onClick to card                                |
| customButton             | ReactNode      | pass custom button component for show more                                   |
| buttonProps              | object         | sets show more button style and label                                        |
| dropBoxStyle             | css properties | pass css to control the position , and style of component                    |
| dropBoxShadow            | string         | choose from various shadow style                                             |
| data                     | [object]       | pass props from example 1.1 when using predefined card                       |
| maxCardShown             | number         | set number of card to be shown                                               |
| showShowMoreBtn          | boolean        | set if you want show more button to be visible or hidden                     |
| dropAnimation            | string         | choose from various drop animation                                           |
| dropAnimation            | string         | choose from various drop animation                                           |
| theme                    | string         | choose from dark or light theme                                              |