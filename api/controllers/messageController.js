import Message from "../models/Message.js";

export const sendMessage = async (req, res) => {
  try {
    const { content, receiverId } = req.body;

    const newMessage = await Message.create({
      sender: req.user.id,
      receiver: receiverId,
      content,
    });

    // TODO: Send the message in real

    res.status(201).json({
      success: true,
      message: newMessage,
    });
  } catch (error) {
    console.log("Error in sendMessage: ", error);

    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const getConversation = async (req, res) => {
  try {
    const { userId } = req.params;

    const messages = await Message.find({
      $or: [
        { sender: req.user._id, receiver: userId },
        { receiver: req.user._id, sender: userId },
      ],
    }).sort("createdAt");

    res.status(200).json({
      success: true,
      messages,
    });
  } catch (error) {
    console.log("Error in getConversation: ", error);

    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
