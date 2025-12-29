import React from 'react';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { Textarea } from '@/shared/ui/textarea';
import './aquarelleButton.sass';
import './hero.sass';
import './fancy-btn.sass';
import './watercolor-btn.sass';

interface ProjectColorsProps {
    color: string;
}

const ProjectColors:React.FC<ProjectColorsProps> = ({ color }) => {
    return (
        <div style={{margin: '10px', backgroundColor: color, width: "100px", height: "100px"}}>
            <span style={{color: 'black'}}>{color}</span>
        </div>
    );
}

const Hero = () => {
  return (
    <div className='hero'>
        <Button size="large" variant="primary">
            Купить
        </Button>

        <Button size="medium" variant="primary">
            Купить
        </Button>

        <Button size="medium" variant="secondary">
            Купить
        </Button>

        <Button size="small" variant="primary">
            Купить
        </Button>

        <Button loading>
            Сохранить
        </Button>

        <Button disabled>
            Недоступно
        </Button>

        <div style={{ marginTop: '40px' }}>
            <h1 style={{ color: '#A8B47F' }}>Primary Heading</h1>
            <h2 style={{ color: '#E3B97E' }}>Secondary Heading</h2>
            <p>Основной текст на фоне бумаги.</p>
            <p style={{ color: '#8F9478' }}>Приглушённый текст для описаний.</p>
            <button style={{ backgroundColor: '#A8B47F', color: '#FFFFFF', padding: '10px' }}>Primary Button</button>
            <button style={{ backgroundColor: '#A8B47F', color: '#6E7C55', padding: '10px' }}>Primary Button</button>
            <button style={{ backgroundColor: '#E3B97E', color: '#FFFFFF', padding: '10px' }}>Secondary Button</button>
            <div style={{ width: '50px', height: '5px', backgroundColor: '#D9A8A0', marginTop: '10px' }}></div>
        </div>

        <form className="form-example">
            {/*<label htmlFor="name">Имя</label>*/}
            {/*<input type="text" id="name" placeholder="Введите имя"/>*/}

            <p></p>

            <Input label='Name1' placeholder="Введите имя" />
            <Input label='Name2' type='email' defaultValue='Qqqqq' placeholder="Введите email" />

            <Textarea label='Name_3' placeholder="Введите сообщение" />


            <label htmlFor="country">Страна</label>
            <select id="country">
                <option value="">Выберите страну</option>
                <option value="bg">Болгария</option>
                <option value="ua">Украина</option>
                <option value="us">США</option>
            </select>

            <label className="checkbox">
                <input type="checkbox" name="hobby" value="reading"/>
                Чтение
            </label>

            <fieldset>
                <legend>Выберите интересы:</legend>
                <label className="checkbox">
                    <input type="checkbox" name="hobby" value="reading"/>
                    Чтение
                </label>
                <label className="checkbox">
                    <input type="checkbox" name="hobby" value="sports"/>
                    Спорт
                </label>
            </fieldset>

            <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                Перейти на Example
            </a>

            <fieldset>
                <legend>Выберите пол:</legend>
                <label className="radio">
                    <input type="radio" name="gender" value="male"/>
                    Мужской
                </label>
                <label className="radio">
                    <input type="radio" name="gender" value="female"/>
                    Женский
                </label>
            </fieldset>

            <button type="submit"><span>Отправить</span></button>
        </form>


        <p>Основные</p>
        <ProjectColors color='#FBF7F2'/>
        <ProjectColors color='#F5EFE8'/>

        <p>Акценты</p>
        <ProjectColors color='#A8B47F'/>
        <ProjectColors color='#E3B97E'/>
        <ProjectColors color='#D9A8A0'/>

        <p>Текст</p>
        <ProjectColors color='#6E7C55'/>
        <ProjectColors color='#8F9478'/>
        <ProjectColors color='#FFFFFF'/>
        <div className='water-stroke'>
        </div>
    </div>
  );
}

export default Hero;