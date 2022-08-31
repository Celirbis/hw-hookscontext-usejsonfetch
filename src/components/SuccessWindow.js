import useJsonFetch from "../hooks/useJsonFetch";

export default function SuccessWindow(props) {

    const [data, loading, error] = useJsonFetch("http://localhost:7070/data", []);

    return (
        <div className="window">
            <p>Ответ сервера (data):</p>
            <p>{JSON.stringify(data)}</p>
        </div>
    );
}