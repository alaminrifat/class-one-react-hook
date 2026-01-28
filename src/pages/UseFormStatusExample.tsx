import { useFormStatus } from "react-dom";

function StatusInfo() {
    const { pending, data } = useFormStatus();

    return (
        <div
            className={`mt-6 rounded-lg border p-4 transition-all duration-300 ${pending ? "bg-blue-50 border-blue-200" : "bg-gray-50 border-gray-200"
                }`}
        >
            <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
                    Status
                </span>
                <span
                    className={`px-2 py-0.5 rounded text-md font-bold ${pending ? "bg-blue-100 text-blue-700" : "bg-gray-200 text-gray-600"
                        }`}
                >
                    {pending ? "PENDING" : "IDLE"}
                </span>
            </div>

            <div className="space-y-1">
                <p className=" text-xl text-gray-600">
                    <span className="font-medium text-gray-700 ">Data:</span>{" "}
                    {data ? (
                        <span className="font-mono text-blue-600 bg-blue-50 px-1 rounded">
                            {String(data.get("message") ?? "")}
                        </span>
                    ) : (
                        <span className="text-gray-400 italic">null</span>
                    )}
                </p>
            </div>
        </div>
    );
}

function UseFormStatusExample() {
    async function formAction(formData: FormData) {
        // simulate network delay
        await new Promise((r) => setTimeout(r, 5000));
        console.log("Submitted:", formData.get("message"));
    }

    return (
        <div className="min-h-[80vh] flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
                    <h2 className="text-2xl font-bold text-white">Form Status</h2>
                    <p className="text-blue-100 mt-1 text-sm">
                        Test the useFormStatus hook
                    </p>
                </div>

                <div className="p-6">
                    <form action={formAction} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Message
                            </label>
                            <input
                                name="message"
                                placeholder="Type something..."
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                            />
                        </div>

                        <button
                            type="submit"
                            className={`w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center 
                            shadow-md hover:shadow-lg active:transform active:scale-[0.98] }`}
                        >
                            Submit Form
                        </button>

                        <StatusInfo />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UseFormStatusExample;
