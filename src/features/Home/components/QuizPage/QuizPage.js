/* eslint-disable css-modules/no-unused-class */
import React, { useState } from 'react'

import leftIcon from './../../../../common/assets/icons/arrowLeft.png'
import rightIcon from './../../../../common/assets/icons/arrowRight.png'
import studyImgae from './../../../../common/assets/icons/study.png'

import styles from './quizPage.module.scss'

const QuizPage = () => {
  const [quizResult, setQuizResult] = useState({
    quizResult: [
      { key: 'Cât timp aloci pe zi studiului?', value: '' },
      { key: 'Bifează situațiile în care te regăsești:', value: '' },
      { key: 'Când îți place să înveți?', value: '' },
      { key: 'În ce parte a zilei preferi să studiezi?', value: '' },
      { key: 'Unde preferi să studiezi?', value: '' },
    ],
    currentQuestionIndex: 0,
  })

  const handleInputChange = (event, index) => {
    const { value } = event.target
    const updatedResult = [...quizResult.quizResult]
    updatedResult[index].value = value
    setQuizResult({ ...quizResult, quizResult: updatedResult })
  }

  const handlePrevQuestion = () => {
    if (quizResult.currentQuestionIndex > 0)
      setQuizResult({ ...quizResult, currentQuestionIndex: quizResult.currentQuestionIndex - 1 })
  }

  const handleNextQuestion = () => {
    if (quizResult.currentQuestionIndex < quizResult.quizResult.length - 1)
      setQuizResult({ ...quizResult, currentQuestionIndex: quizResult.currentQuestionIndex + 1 })
  }

  const currentQuestion = quizResult.quizResult[quizResult.currentQuestionIndex]
  const isPrevDisabled = quizResult.currentQuestionIndex === 0
  const isNextDisabled = quizResult.currentQuestionIndex === quizResult.quizResult.length - 1

  const handleFinish = () => {
    // Send login request with username and password

    window.location.href = '/result'
  }

  return (
    <div className={styles.container}>
      <p className={styles.textInfo}>
        Acesta este un quiz pentru a putea face un profil si a putea fi mai simplu sa iti gasesti un
        mentor sau un grup!
      </p>
      <div className={styles.imageContainer}>
        <div className={styles.arrowContainer}>
          <img
            src={leftIcon}
            alt='left arrow'
            className={`${styles.arrow} ${isPrevDisabled ? styles.disabled : ''}`}
            onClick={handlePrevQuestion}
          />
          <img src={studyImgae} alt='placeholder' className={styles.image} />
          <img
            src={rightIcon}
            alt='right arrow'
            className={`${styles.arrow} ${isNextDisabled ? styles.disabled : ''}`}
            onClick={handleNextQuestion}
          />
        </div>
      </div>
      <div className={styles.textContainer}>
        <p className={styles.text}>{currentQuestion.key}</p>
      </div>

      <textarea
        className={styles.textarea}
        placeholder='Raspunsul tau aici'
        value={currentQuestion.value}
        onChange={(event) => handleInputChange(event, quizResult.currentQuestionIndex)}
      />
      {isNextDisabled ? (
        <button className={styles.button} onClick={handleFinish}>
          Finalizare quiz
        </button>
      ) : (
        ''
      )}
    </div>
  )
}

export default QuizPage
