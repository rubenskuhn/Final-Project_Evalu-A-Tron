import dbConnect from "../../../db/connect";
import Question from "../../../db/models/Question";

export default async function handler(request, response) {
  await dbConnect();

  console.log("===== API QUERY?", request);

  //============= No Filter Yet =======

  if (request.method === "GET") {
    const questions = await Question.find(); // lower case is the const or function, upper case is the model
    return response.status(200).json(questions); // 200 is good to go!
  }

  console.log("===== API Response GET", response);
  //========================

  //   if (request.method === "PUT") {
  //     try {
  //       const editQuestionData = request.body;
  //       console.log("==== Edit Data:", editQuestionData);
  //       const editQuestion = new Question(editQuestionData);
  //       await Question.findByIdAndUpdate(_id, editQuestionData);

  //       return response.status(201).json({ status: "Question edited" });
  //     } catch (e) {
  //       console.log("No Question Found --->: ", e);
  //     }
  //   }

  //   if (request.method === "DELETE") {
  //     const deleteEntryQuestion = await Question.findByIdAndDelete(_id);
  //     //await Question.deleteOne({ _id: { $in: deleteEntryQuestion.data } });
  //     return response.status(201).json("Entry Deleted");
  //   }

  response.status(405).json({ message: "Method not allowed" });
}
