import { useState } from "react";

const App = () => {
    // JavaScript 영역

    const [value, setValue] = useState("");

    const [lists, setList] = useState([
        { id: crypto.randomUUID(), text: "국가명" },
        { id: crypto.randomUUID(), text: "금메달" },
        { id: crypto.randomUUID(), text: "은메달" },
        { id: crypto.randomUUID(), text: "동메달" },
    ]);

    // crypto.randomUUID() : 고유한 식별자 생성

    return (
        <div className="app-style">
            {/* HTML / JSX 영역 */}
            <h2>2024 파리 올림픽</h2>

            <main className="list-style">
                <section>
                    <ul className="ul-style">
                        <li>국가명</li>
                        <li>금메달</li>
                        <li>은메달</li>
                        <li>동메달</li>
                    </ul>
                    <form className="form-style">
                        <input type="text" placeholder="국가명" className="input-style" />
                        <input type="number" placeholder="0" min="0" className="input-style" />
                        <input type="number" placeholder="0" min="0" className="input-style" />
                        <input type="number" placeholder="0" min="0" className="input-style" />
                        <button type="submit">국가 추가</button>
                        <button type="submit">업데이트</button>
                    </form>
                </section>
                <div></div>
            </main>
            <span className="span-style">아직 추가된 국가가 없습니다. 메달을 추적하세요.</span>
        </div>
    );
};

export default App;
