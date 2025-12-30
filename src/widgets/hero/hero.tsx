import React from 'react';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { Textarea } from '@/shared/ui/textarea';
import { Select } from '@/shared/ui/select';
import { Checkbox } from '@/shared/ui/checkbox';
import { Radio } from '@/shared/ui/radio';
import { FormSection } from '@/shared/ui/form-section';
import { Quote } from '@/shared/ui/quote';
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
            <h1>Primary Heading</h1>
            <h2>Secondary Heading</h2>
            <p>Основной текст на фоне бумаги.</p>
            <p style={{ color: '#8F9478' }}>Приглушённый текст для описаний.</p>
            <button style={{ backgroundColor: '#A8B47F', color: '#FFFFFF', padding: '10px' }}>Primary Button</button>
            <button style={{ backgroundColor: '#A8B47F', color: '#6E7C55', padding: '10px' }}>Primary Button</button>
            <button style={{ backgroundColor: '#E3B97E', color: '#FFFFFF', padding: '10px' }}>Secondary Button</button>
            <div style={{ width: '50px', height: '5px', backgroundColor: '#D9A8A0', marginTop: '10px' }}></div>
        </div>

        <form className="form-example">
            <p></p>

            <Input label='Name1' placeholder="Введите имя" />
            <Input label='Name2' type='email' defaultValue='Qqqqq' placeholder="Введите email" />

            <Textarea label='Name_3' placeholder="Введите сообщение" />

            <Select
                label="Name_4"
                options={[
                    { value: '', label: 'Выберите страну' },
                    { value: 'bg', label: 'Болгария' },
                    { value: 'ua', label: 'Украина' },
                    { value: 'us', label: 'США' },
                ]}
            />

            <Checkbox name="hobby" label='Согласен с условиями' value="reading" />

            <Radio name="type" value="a" label="Вариант A" />
            <Radio name="type" value="b" label="Вариант B" />

            <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                Перейти на Example
            </a>

            <FormSection title="Контактные данные">
                <Input label="Имя" />
                <Input label="Email" />
            </FormSection>

            <FormSection title="Выберите пол:">
                <Radio name="gender" value="male" label="Мужской" />
                <Radio name="gender" value="female" label="Женский" />
            </FormSection>

            <Button size="medium">
                Send Отправить
            </Button>
        </form>

        <Quote author="Claude Monet">
            Color is my day-long obsession, joy and torment.
        </Quote>
        <Quote>
            Каждая картина — это разговор с тишиной.
        </Quote>

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