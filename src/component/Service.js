import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title';

export default class Service extends Component {
    state={
        Service:[
            {
                icon:<FaCocktail />,
                title:'Free Cocktail',
                info:'dlkf aldkfklkd adslfkdsfl sddfldsl ldkds llkdsf dsfkl sddfk dsldfk sddfk'
            },
            {
                icon:<FaHiking />,
                title:'Endless Hiking',
                info:'dlkf aldkfklkd adslfkdsfl sddfldsl ldkds llkdsf dsfkl sddfk dsldfk sddfk'
            },
            {
                icon:<FaShuttleVan />,
                title:'Free Shuttle',
                info:'dlkf aldkfklkd adslfkdsfl sddfldsl ldkds llkdsf dsfkl sddfk dsldfk sddfk'
            },
            {
                icon:<FaBeer />,
                title:'Strongest Beer',
                info:'dlkf aldkfklkd adslfkdsfl sddfldsl ldkds llkdsf dsfkl sddfk dsldfk sddfk'
            }
        ]
    }
    render() {
        return (
            <section className='services'>
                <Title title='Services' />
                <div className='services-center'>
                  {this.state.Service.map((item, index)=>{
                       return (
                        <article key={index} className='service'>
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                       )
                    })}
                </div>
            </section>
        )
    }
}
