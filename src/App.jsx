// 컴포넌트 밖, 필요한  파일 가져오는 영역
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

    const onClickHandler = () => {};

    return (
        <div className="app-style">
            {/* HTML / JSX 영역 */}
            <h2>2024 파리 올림픽</h2>
            <main>
                <div className="list-style">
                    <section>
                        <p className="p-style">국가명</p>
                        <form>
                            <input type="text" min="0" placeholder="국가 이름" className="input-style" />
                        </form>
                    </section>
                    <section>
                        <p className="p-style">금메달</p>
                        <form>
                            <input type="number" min="0" placeholder="0" className="input-style" />
                        </form>
                    </section>
                    <section>
                        <p className="p-style">은메달</p>
                        <form>
                            <input type="number" min="0" placeholder="0" className="input-style" />
                        </form>
                    </section>
                    <section>
                        <p className="p-style">동메달</p>
                        <form>
                            <input type="number" min="0" placeholder="0" className="input-style" />
                        </form>
                    </section>
                    <section>
                        <button onClick={onClickHandler} className="Addcountry button-style">
                            국가 추가
                        </button>
                        <button className="button-style">업데이트</button>
                    </section>
                </div>
                <div>
                    <ul>
                        {lists.map((list) => (
                            <li key={list.id}>{list.text}</li>
                        ))}
                    </ul>
                </div>
            </main>
            <span className="span-style">아직 추가된 국가가 없습니다. 메달을 추적하세요.</span>
        </div>
    );
};

export default App;
