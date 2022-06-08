import { useEffect, useState } from "react";
import "./Especialistas.css";

const Especialistas = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(`api/v1/doctors`);
        if (!res.ok) {
          throw new Error(`This is an HTTP error: The status is ${res.status}`);
        }
        let actualData = await res.json();
        setData(actualData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  const doctorRenderer =
    data &&
    data.map((d) => (
      <div className="doctor" key={d.id}>
        <img className="photo" src={d.image_url} />
        <h1 className="name">{`${d.first_name} ${d.last_name}`}</h1>
        <p className="">{`${d.professional_statement}`}</p>

        {d.specialization && d.specialization.length > 0 && (

          <div className="specializations">
            {d.specialization.map((specialization, idx) => (
              <div key={idx}>
                <h3 key={specialization}>
                  {specialization.specialization_name}
                </h3>
              </div>
            ))}
          </div>
        )}
      </div>
    ));

  return <div>
    <div className="container">{doctorRenderer}
    </div>
  </div>
};

export default Especialistas;
