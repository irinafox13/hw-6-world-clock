import { useState, useEffect } from 'react'
import moment from 'moment'
import ClocksList from './ClocksList'

const Form = () => {
    const [city, setCity] = useState('');
    const [timeZone, setTimeZone] = useState('');
    const [cities, setCities] = useState([]);
    const [time, setTime] = useState(moment());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(moment());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const handleSubmit = (e: React.FormEvent<EventTarget>): void => {
        e.preventDefault();
        const addCity = {
            city: city,
            timeZone: timeZone
        };
        setCities(prevState => [...prevState, addCity]);
        setCity('')
        setTimeZone('')
    }

    const removeClock = (i: number) => {
        setCities(prevState => prevState.filter((el, index) => index !== i))
    }

    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form__row">
                    <label htmlFor="name">Название</label>
                    <input id="name" name="name" value={city} onChange={e => setCity(e.target.value)} />
                </div>
                <div className="form__row">
                    <label htmlFor="time-zone">Временная зона</label>
                    <input id="time-zone" name="time-zone" value={timeZone} onChange={e => setTimeZone(e.target.value)} />
                </div>
                <button type="submit">Добавить</button>
            </form>
            <div className="clock-list">
                <ClocksList data={cities} remove={removeClock} />
            </div>
        </>
    )
}

export default Form;