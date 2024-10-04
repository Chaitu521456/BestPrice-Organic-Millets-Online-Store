import "./Founders.css";

import img1 from "../../assets/Chaitanya.jpg";
import img2 from "../../assets/Teja.jpg";
import img3 from "../../assets/navyatha.jpg";

function Founders() {
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                <div className="col">
                    <div className="bg-success text-center rounded shadow-lg p-3">
                        <img src={img1} width='250px' className="p-4 rounded-circle border border-warning" alt="Chaitanya" />
                        <h3 className="text-warning">Pillutla Chaitanya</h3>
                        <p className="mb-1">Education: <strong>Pursuing B.Tech</strong></p>
                        <p className="mb-1">Relation: <strong>S/o Venkata Rao</strong></p>
                        <p className="mb-1">Share: <strong>51%</strong></p>
                        <p className="mb-1">Age: <strong>20</strong></p>
                    </div>
                </div>

                <div className="col">
                    <div className="bg-success text-center rounded shadow-lg p-3">
                        <img src={img2} width='250px' className="p-4 rounded-circle border border-warning" alt="Teja" />
                        <h3 className="text-warning">Pillutla T Charan Teja</h3>
                        <p className="mb-1">Education: <strong>Pursuing B.Tech</strong></p>
                        <p className="mb-1">Relation: <strong>B/o Chaitanya</strong></p>
                        <p className="mb-1">Share: <strong>29%</strong></p>
                        <p className="mb-1">Age: <strong>18</strong></p>
                    </div>
                </div>

                <div className="col">
                    <div className="bg-success text-center rounded shadow-lg p-3">
                        <img src={img3} width='250px' className="p-4 rounded-circle border border-warning" alt="Navyatha" />
                        <h3 className="text-warning">Pillutla Navyatha</h3>
                        <p className="mb-1">Education: <strong>Pursuing Intermediate</strong></p>
                        <p className="mb-1">Relation: <strong>Sister of Chaitanya</strong></p>
                        <p className="mb-1">Share: <strong>20%</strong></p>
                        <p className="mb-1">Age: <strong>16</strong></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Founders;
