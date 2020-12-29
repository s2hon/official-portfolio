import React from 'react';

import bigproject1 from '../../components/App/assets/images/projects/employee-directory.gif'
import bigproject2 from '../../components/App/assets/images/projects/fitness-tracker.gif'
import bigproject3 from '../../components/App/assets/images/projects/Note-Taker.gif'

import smallproject1 from '../../components/App/assets/images/projects/budget-tracker.png'
import smallproject2 from '../../components/App/assets/images/projects/reservation.png'

import mainproject0 from '../../components/App/assets/images/projects/SushiJunai.gif'
import mainproject1 from '../../components/App/assets/images/projects/Earbud.gif'


const PortfolioImg = ({ type }) => {
    switch (type) {
        case 'bigproject1':
            return <img src={bigproject1}  alt="employee-directory" />;
        case 'bigproject2':
            return <img src={bigproject2}  alt="fitness-tracker" />;
        case 'bigproject3':
            return <img src={bigproject3}  alt="fitness-tracker" />;

        case 'smallproject1':
            return <img src={smallproject1}  alt="employee-directory" />;
        case 'smallproject2':
            return <img src={smallproject2}  alt="fitness-tracker" />;

        case 'mainproject0':
            return <img src={mainproject0}  alt="employee-directory" />;
        case 'mainproject1':
            return <img src={mainproject1}  alt="fitness-tracker" />;
        default:
        return null;
    }
};

export default PortfolioImg;