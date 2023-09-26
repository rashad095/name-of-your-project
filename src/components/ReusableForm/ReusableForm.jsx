

const ReusableForm = ({formTitle, handleSubmit, submitBtnText ='Submit'}) => {

   

    return (
        <div>
            <h2>{formTitle}</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" />
                <br /> <br />
                <input type="email" name="email" />
                <br /> <br />
                <input type="password" name="password" />
                <br /> <br />
                <input type="submit" value={submitBtnText} />
            </form>
        </div>
    );
};

export default ReusableForm;