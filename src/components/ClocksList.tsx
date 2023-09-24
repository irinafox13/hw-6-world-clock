import Clock from './Clock'
import moment from 'moment'
type City = {
	city: string,
	timeZone: string
}
type CitiesProps = {
    data: City[],
    remove: (i: number) => void,
}

const ClocksList = ({ data, remove }: CitiesProps) => {
    
    return (
        data.map((item, i) => {
            return (
                <div key={i}>
                    {data.length > 0 &&
                        <div className="card">
                            <header>
                                <h2>{item.city}</h2>
                                <button type="button" onClick={() => { remove(i) }}>X</button>
                            </header>
                            <Clock time={moment().add(item.timeZone, 'hours').format('HH:mm:ss')} />
                        </div>
                    }
                </div>
            )
        })
    )
}

export default ClocksList;