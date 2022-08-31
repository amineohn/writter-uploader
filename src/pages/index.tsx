import { FileInput } from "@/components/FileInput";
import axios from "axios";
import { useState } from "react";
import { CheckBadgeIcon, CheckIcon } from "@heroicons/react/20/solid";

const Home = () => {
  const [progress, setProgress] = useState(0);
    const onChange = async (formData: FormData) => {
        const config = {
            headers: { 'content-type': 'multipart/form-data' },
            onUploadProgress: (event) => {
              setProgress(Math.round((event.loaded * 100) / event.total));
            },

        };

        const response = await axios.post('/api/uploads', formData, config);
        console.log('response', response.data);
    };

    return (
      <div className={'min-h-screen'}>
        <div className={"flex space-y-2 mt-4 flex-col items-center justify-center"}>
          <FileInput
            label=""
            uploadFileName="theFiles"
            onChange={onChange}
          />
          <div className="w-80 inline-flex items-center space-x-2">
            <div className={"w-full h-2 bg-gray-300/30 rounded-full"}>
              <div className="bg-blue-600 h-2 rounded-full dark:bg-blue-500 transitions duration-300" style={{ width: progress + "%" }} />
            </div>
            {progress === 100 && (
              <CheckBadgeIcon className={'w-5 h-5 text-green-500'} />
            )}
          </div>
        </div>
      </div>
    );
};

export default Home;
