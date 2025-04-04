import Card from './Card';

const Tours = ({ tours, removeTour }) => {
  return (
    <div className='container'>
      <div className='title'>
        <h1>Plan with Adi</h1>
      </div>

      <div className='cards'>
        {
          tours.map((tour) => {
          return <Card key={tour.id} {...tour} removeTour={removeTour} />
  })}
      </div>
    </div>
  );
};

export default Tours;
