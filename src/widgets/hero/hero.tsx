import React from 'react';

import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { Textarea } from '@/shared/ui/textarea';
import { Select } from '@/shared/ui/select';
import { Checkbox } from '@/shared/ui/checkbox';
import { Radio } from '@/shared/ui/radio';
import { FormSection } from '@/shared/ui/form-section';
import { Quote } from '@/shared/ui/quote';
import { Image } from '@/shared/ui/image';
import { Card } from '@/shared/ui/card';
import { Caption } from "@/shared/ui/caption";
import { Grid } from '@/shared/ui/layout/grid';
import { Masonry } from '@/shared/ui/layout/masonry';
import { Text } from '@/shared/ui/text';

import './aquarelleButton.sass';
import './hero.sass';
import './fancy-btn.sass';
import './watercolor-btn.sass';

import productImg from "@/shared/assets/images/product.jpg";
import productImg2 from "@/shared/assets/images/product2.jpg";
import productImg3 from "@/shared/assets/images/product3.jpeg";
import productImg4 from "@/shared/assets/images/product4.jpg";

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
        <Grid columns={4} gap="1.5rem">
            <Card>
                <Image src={productImg} alt="product" ratio="3:2" />
                <h3>Product name 1</h3>
                <p>Description text...</p>
            </Card>
            <Card>
                <Image src={productImg2} alt="product" ratio="3:2" />
                <h3>Product name 2</h3>
                <Caption>Акварель №2</Caption>
            </Card>
            <Card>
                <Image src={productImg3} alt="product" ratio="3:2" />
                <h3>Product name 3</h3>
                <p>Description text...</p>
            </Card>
            <Card>
                <Image src={productImg4} alt="product" ratio="3:2" />
                <h3>Product name 4</h3>
                <p>Description text...</p>
            </Card>
        </Grid>

        <Masonry columns={4} gap="1rem">
            <Image src={productImg} alt="Описание 1" mask />
            <Image src={productImg2} alt="Описание 2" mask />
            <Image src={productImg3} alt="Описание 3" mask />
            <Image src={productImg4} alt="Описание 3" mask/>
            <Image src={productImg4} alt="Описание 3" mask />
            <Image src={productImg} alt="Описание 1" mask/>
            <Image src={productImg3} alt="Описание 3" mask/>
            <Image src={productImg2} alt="Описание 2" mask/>
        </Masonry>

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
            <div style={{ width: '50px', height: '5px', backgroundColor: '#F2C0B0', marginTop: '10px' }}></div>
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

            <div>
                <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                    Перейти на Example
                </a>
            </div>

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

        <div style={{width: "300px", height: "auto"}}>
            <Image
                src={productImg}
                alt="Описание"
                ratio="1:1"
                mask
                onClick={() => console.log('clicked')}
            />
        </div>

        <div style={{width: "300px", height: "auto"}}>
            <Image
                src={productImg}
                alt="Описание"
                ratio="4:5"
                mask
                onClick={() => console.log('clicked')}
            />
        </div>

        <div style={{width: "300px", height: "auto"}}>
            <Image
                src={productImg}
                alt="Описание"
                ratio="3:2"
                mask
                onClick={() => console.log('clicked')}
            />
        </div>

        <Text as='div' show>
            Это дефолтный текст.
        </Text>

        <Text variant="tooltip" show>
            Это подсказка для кнопки
        </Text>

        <Text variant="caption">Подпись к изображению</Text>

        <Text variant="quote" style={{lineHeight:1.7}}>
            «Жизнь — это как акварель: главное, чтобы мазки были мягкими и гармоничными»
        </Text>

        <Text variant="annotation" show={false}>
            Аннотация временно скрыта
        </Text>

        <Text as='p' variant="note">
            Сноска к тексту
        </Text>

        <Text as='div' variant="quote">
            «Жизнь — как акварель: мягко, гармонично»
        </Text>

        <p>Основные</p>
        <ProjectColors color='#FBF7F2'/>
        <ProjectColors color='#F5EFE8'/>

        <p>Акценты</p>
        <ProjectColors color='#A8B47F'/>
        <ProjectColors color='#E3B97E'/>
        <ProjectColors color='#F2C0B0'/>

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