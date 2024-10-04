import { useForm } from 'react-hook-form';
import './Feedback.css';

function Feedback() {
    let { register, handleSubmit } = useForm();

    // Feedback Submission
    function handleFormSubmit(userObj) {
        console.log(userObj);
    }

    return (
        <div className="feedback-container">
            <h1 className="display-5 mb-5 mt-3 sc text-center">Give Your Feedback About Your Experience</h1>

            <form className="feedback-form w-50 mx-auto" onSubmit={handleSubmit(handleFormSubmit)}>
                {/* E-mail */}
                <div className="form-group mb-4">
                    <label htmlFor="mail" className="form-label text-danger">E-mail</label>
                    <input type="email" {...register('gmail')} id="mail" className="form-control" required />
                </div>

                {/* Feedback */}
                <div className="form-group mb-4">
                    <label htmlFor="feedback" className="form-label text-danger">Feedback</label>
                    <textarea {...register('feedback')} id="feedback" rows="4" className="form-control" required></textarea>
                </div>

                {/* Opinion About Experience */}
                <div className="form-group mb-4">
                    <label htmlFor="opt" className="form-label text-danger">Opinion About Experience</label>
                    <select {...register('experience')} id="opt" className="form-control" required>
                        <option value="extra-ordinary">Extra Ordinary</option>
                        <option value="superb">Superb</option>
                        <option value="ordinary">Ordinary</option>
                        <option value="less">Less</option>
                        <option value="others">Others</option>
                    </select>
                </div>

                {/* 5-Star Rating */}
                <div className="form-group mb-4">
                    <label className="form-label text-danger">Rating</label>
                    <div className="rating">
                        <input type="radio" id="star1" {...register('rating')} value="1" /><label htmlFor="star1">★</label>
                        <input type="radio" id="star2" {...register('rating')} value="2" /><label htmlFor="star2">★</label>
                        <input type="radio" id="star3" {...register('rating')} value="3" /><label htmlFor="star3">★</label>
                        <input type="radio" id="star4" {...register('rating')} value="4" /><label htmlFor="star4">★</label>
                        <input type="radio" id="star5" {...register('rating')} value="5" /><label htmlFor="star5">★</label>
                    </div>
                </div>

                <div className="form-group mb-4">
                    <button type="submit" className="btn-submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Feedback;
