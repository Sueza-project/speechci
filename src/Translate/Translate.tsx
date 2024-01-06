import { useState, useEffect } from "react";

const MyReactComponent = () => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const endpoint = "http://127.0.0.1:5049/translate";
      const response = await fetch(endpoint);
      const result = await response.json();
      setResult(result.data);
      setLoading(false); // Set loading to false once data is received
    } catch (e) {
      console.error("Error fetching data:", e);
      setLoading(false); // Set loading to false in case of an error
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "auto",
        padding: 20,
        backgroundColor: "#f0f0f0",
        borderRadius: 10,
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="relative">
        <h2 className="text-2xl mb-4 text-center">Speech Transcript</h2>
        {loading ? (
          <p className="text-center">Waiting for text version...</p>
        ) : (
          <div className="relative sm:absolute md:fixed lg:absolute xl:relative">
            <p className="text-center">{result}!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyReactComponent;
