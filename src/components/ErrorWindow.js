import useJsonFetch from "../hooks/useJsonFetch";

export default function ErrorWindow(props) {

    const [data, loading, error] = useJsonFetch("http://localhost:7070/error", []);

    return (
        <div className="window">
            <p>Ошибка (error):</p>
            {error && <p>{error.name + ": " + error.message}</p>}
        </div>
    );
}