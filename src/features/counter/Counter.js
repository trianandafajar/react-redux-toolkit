import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset } from "./counterSlice"; // Tambahkan reset action

export function Counter() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className="flex flex-col items-center p-6 border rounded-lg shadow-md max-w-xs mx-auto bg-white">
            <h1 className="text-4xl font-bold">{count}</h1>
            <div className="mt-4 space-x-2">
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                    aria-label="Increment Value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <button
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                    aria-label="Decrement Value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
                <button
                    className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
                    aria-label="Reset Value"
                    onClick={() => dispatch(reset())}
                >
                    Reset
                </button>
            </div>
        </div>
    );
}
