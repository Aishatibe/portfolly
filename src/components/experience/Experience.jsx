import React from 'react';
import './experience.css';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { FaCss3Alt } from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';
import { FaBootstrap } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { SiPython } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { SiPhp, SiMongodb, SiCsharp } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';

const Experience = () => {
  return (
    <section id="experience">
      <h5>Why Use My Services ??</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiOutlineHtml5 className="exprience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaCss3Alt className="exprience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <DiJavascript1 className="exprience__details-icon" />
              <div>
                <h4>JAVASCRIPT</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaBootstrap className="exprience__details-icon" />
              <div>
                <h4>BOOTSTRAP</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaReact className="exprience__details-icon" />
              <div>
                <h4>REACT JS</h4>

                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiPython className="exprience__details-icon" />
              <div>
                <h4>PYTHON</h4>

                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>

        {/* BACKEND */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaNodeJs className="exprience__details-icon" />
              <div>
                <h4>NODE JS</h4>

                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiPhp className="exprience__details-icon" />
              <div>
                <h4>PHP</h4>

                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiCsharp className="exprience__details-icon" />
              <div>
                <h4>C#</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiMongodb className="exprience__details-icon" />
              <div>
                <h4>MONGODB</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <GrMysql className="exprience__details-icon" />
              <div>
                <h4>MYSQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiPython className="exprience__details-icon" />
              <div>
                <h4>PYTHON</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
