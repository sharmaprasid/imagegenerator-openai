import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";


const Imagegen = () => {
  const [result, setResult] = useState("");
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const generateImage = async () => {
    const response = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    });
    setResult(response.data.data[0].url);
  };
  const [prompt, setPrompt] = useState("");

  return (
    <>
      <div >
       
        <input className="input-field"
          type="text"
          placeholder="Image to be Generated"
          onChange={(e) => setPrompt(e.target.value)}
          style={{margin:"80px 800px 10px" ,display:"flex"}}
        />
        <button  onClick={generateImage}style={{marginLeft:"800px"}}>GenerateImage</button>
        
      </div>
      {result.length > 0 ? <img style={{marginLeft:"800px",height:"300px",width:"300px"}} src={result} alt="result" /> : <></>}
    </>
  );
};

export default Imagegen;
