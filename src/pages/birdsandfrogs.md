---
path: "/birdsandfrogs"
date: "2017-09-26"
title: "A comparison of two bioacoustics papers and their relevance to Cacophony."
---

The Cacophony Project (https://cacophony.org.nz/) is based around using technology to help improve pest control and bird conservation in New Zealand. One of their main focuses is on collecting and analysing birdsong data. The idea is that if we had up to date data on the levels of birdsong in conservation areas then we can track how they are doing and also how pest control efforts are going. To help with this Cacophony is building birdsong monitors that are far cheaper, more durable and easier to use than the current ones. (I worked on these during the Summer of 2016 and they’re pretty wicked - essentially a smart phone in a tree).

My position on the Cacophony team is in the early stages of birdsong analysis. Lately there has been a lot of research going on in the area which is awesome as it helps me to work out what will/won’t work.
Ideally the birdsong analysis process will follow these steps:
-Take in birdsong of a constant quality (this is debatable due to further differences in quality between the same microphones in different areas - ie. we may have to analyse areas separately because of different sound patterns (traffic, animals, voices) - so the techniques we use could affect this)
-Perform processing on birdsong to remove discrete sound events that aren’t birdsong.
-Use classification

Warning: below I have made summaries of the findings of two papers (Using multi-label classification for acoustic pattern detection and assisting bird species surveys - 2016 - and An intelligent system for estimating frog community calling activity and species richness -2017). They are quite detailed and use a lot of jargon. I’ve also used a lot of jargon (I’ve tried to explain where it’s feasible) so if it seems like I’m talking in another language, essentially I am… just read the conclusion.
Essentially my aim in doing this is to help spread knowledge as well as improve visibility of the field for those not involved.


Birds.

-----------------

Using multi-label classification for acoustic pattern detection and
assisting bird species surveys
Authors/contributors: Liang Zhang, Michael Towsey, Jie Xie, Jinglan Zhang, Paul Roe

-----------------

This paper proposes a binary relevance based multi-label classification approach to recognise simultaneous acoustic patterns in one-minute audio clips. By using acoustic indices as global features and a multilayer perceptron as the base classifier the researchers achieved good classification performance for their data.
A multi-label classifier, when compared to a single label classifier, allows for a single instance of data to be split into many different labels. This is especially useful for bioacoustics as it allows for the classification of simultaneous acoustic patterns. For example, it allows the machine to identify that there is both wind and birdsong in one instance ( a single-label classifier couldn’t do that). A binary relevance based multi label classifier is just a type of multi-label classifier where instances are transformed into many single-label problems. This has been shown to be much more computationally efficient than other multi-label classifiers while also being effective (note, effective is used here instead of say, performance. Performance is hard to compare across classifiers due to the large amount of factors contributing to ‘performance’) .
The classifier associates each one minute audio clip with one to five of the following labels (Birds, Insects, Low activity, Wind, Rain).
The indices/features were picked to ensure high classification accuracy. A balance between having too many features (overfitting) and having too few (underfitting) is achieved using seven acoustic indices. These are as follows AveSignalAmplitude, Signal-to-residual ratio, AcousticComplexity, AveEntropySpectrum, EntropyPeaks and Ridge indices (verticalRidge and horizontalRidge.
The classifier, multi-layer perceptron, was picked from three (decision tree, K Nearest Neighbour(kNN), multi-layer perceptron) as being the most accurate according to the evaluation metrics. Their parameters were optimised using grid-search.
Evaluations of the  classifications were made using Hamming Loss, Accuracy and Exact Match. The results for all three classifiers are shown below:

Hamming loss
Accuracy
Exact match

ML-kNN
0.099 ± 0.008
0.827 ± 0.014
0.622 ± 0.030


ML-DecisionTree
0.090 ± 0.010
0.833 ± 0.020
0.661 ± 0.028


ML-MultilayerPerceptron
0.079 ± 0.007
0.853 ± 0.014
0.696 ± 0.039


The recordings that were labelled for bird activity by the classifier were then further analysed using multi-label classification (classifier=multi-layer perceptron). A test was designed for 5 different methods of bird species recognition. Based on data already gathered and labelled for all the different bird species present, the test was designed to observe the time efficiency for each classification method to label all the bird species present in 125mins of audio. The classification methods were: the theoretical best(all bird species are labelled as soon as they could have possibly been recognised), the multi-layer perceptron multi-label classifier, a single-label classifier, the Dawn Sampling Method* and randomly selecting minutes without any process (green). I think the findings are quite interesting.
The Dawn Sampling method was the most effective for the first 75 minutes and then was taken over by the single and multi label classifiers. The Single label classifier was the better on average between itself and the multilabel one (see later for a further analysis of this). The single/multi label classifiers are better from the start than the random selection method. In fact at the 25minute mark the automated classifiers had labelled as many species as the random method had at 37mins. This is significant as it implies that using automated classification saves time whilst being able to recognise more species - about 12.5% less species were recorded by the random method after listening to the full 125minutes of samples.
It is amazing to think that the multi/single label classifiers were just as good as the dawn sampling method at the 75minute mark. The Dawn sampling method is also susceptible to two problems: weather conditions(rain can interrupt the dawn chorus) and some birds don’t appear in the morning. Therefore the automated classification methods provide comparable efficiency but also a more resilient method.

What about multi vs single label methods? There was further testing done that showed the two methods to have two main differences. Multi label classification produced more false positives but single label classification wasn’t able to recognise all the bird species in a dataset. Whilst these were tests with a small sample size, they match the hypotheses of the author.  In a research environment I would suggest to do the tests again but in my case where I want to know the best methods promptly so I can start ‘breaking things’(Zuckerburg) I will go with the assumption that multi label classification is better until proven otherwise.

Overall this research is really helpful to have as it gives me direction as to what are the better methods of going about building a process to analyse birdsong collected by Cacophonometers around New Zealand.




Frogs:

-----------------

An intelligent system for estimating frog community calling activity and
species richness
Authors/contributors: Jie Xiea,b, Michael Towseya, Mingying Zhuc, Jinglan Zhanga, Paul Roea

-----------------

This method was used for the analysis of Frog species richness and was used with weather data to explore the effect of weather on frog calling activity.
The researchers used 10sec recording samples. To filter out those recordings without frog calls the researchers implemented a novel Acoustic Event Detection (AED) algorithm. It labels all the discrete acoustic events in a file and then using the mean and standard deviation of Area, power and averaged dominant frequency of the all the acoustic events as features, a random forest classifier (binary classification, supervised machine learning algorithm) will filter out those events that aren’t frog calls (ie. rain, traffic, insects, birds).
The random forest classifier was trained using a datatset of 30 recordings with frogs and 30 without.
Next up is labelling the data for all the different species of frog (the same method from the previous summary - 2016 - is used here).Using the recordings with frog calls, binary relevance based multi-label learning is applied using one of three algorithms: decision tree, multi-layer perceptron and random forest. Six acoustic features were picked to be used in the classifiers. These were based on what features have been successful in past animal acoustics classifiers. The features were: Linear predictive coding coefficients, Mel-frequency cepstral coefficients, Linear-frequency cepstral coefficients, Acoustic complexity index, Acoustic diversity index and Acoustic evenness index. (these are listed here more for reference than an explanation!).
Classifier parameter optimisation was done using grid-search.
The accuracy of the classifiers was evaluated using a mix of three metrics: Hamming loss, accuracy and subset accuracy. The results are supplied below:

T(testing(s))
T(training(s))
Hamming Loss
Accuracy
Subset Accuracy

ML-Decision Tree n
0.222 ± 0.026
0.006 ± 0.008
0.154 ± 0.006
0.597 ± 0.019
0.260 ± 0.029


ML-MultilayerPerceptron
243.372 ± 1.918
0.072 ± 0.006
0.112 ± 0.014
0.698 ± 0.028
0.418 ± 0.075


ML-RandomForest
0.877 ± 0.030
0.019 ± 0.007
0.100 ± 0.009
0.720 ± 0.028
0.453 ± 0.029

In the above, T(training and testing) are measurements of the time in seconds the algorithms take. A lower value of Hamming Loss implies better classification performance but higher values of Accuracy/Subset imply better classification performance.

I’ve put the random forest results in bold because they are the best (time is an insignificant factor from my perspective).
Overall the methods used above were successful in generating a fairly accurate analysis of frog calling activity and species richness. I acknowledge there could well be problems in trying to apply this exact same method to birdsong analysis but I am also confident that with a small amount of tinkering it would work. Moreover it gives us an example of bioacoustic analysis and the success that is possible.


Conclusion:
Gee how interesting. I’ve got a few more papers like those explained above so they’ll be useful.
Overall my major points of interest (coming from a Cacophony perspective) when those two above are compared are:
-Both use supervised learning methods so training data must be gathered for both testing and production (maybe a bit over the top but imagine a public initiative to get school kids to label birds in sound files as part of learning about conservation and tech.. heh)
-Both methods recognise the importance of filtering out non-call noises first to improve efficiency of the species recognition algorithms. This makes the problem of analysing birdsong more of a problem of firstly ‘recognising birdsong’ and then ‘analysing it’.
-To separate birdsong from environmental noise the authors use a single-label binary classification method for the frog study and a multi-label binary classification method for the bird study. It would require further research to find out why the researcher used a single label classifier for the frog’s experiment and what would be the best method to suit Cacophony’s needs.
-Although the authors were similar for both papers, they both use the same technique for classifying bird/frog species ( binary relevance based multi-label learning) albeit with a different classifier (multi-layer perceptron vs random forest).
-The features used in the multi-label classifiers for recognising bird/frog species are all different. The choice of these features will have to be researched as there must be a reason why the same authors used different features for a very similar problem. Could this be linked to frogs vs birds or something else?

If you’ve read all this then well done. This is my interpretation of the two papers after a night looking at them so I could have missed important points. But, please feel free to get into contact with me about anything I’ve said in this post.

*The Dawn Sampling method (listening to birds in the morning for 3 hours)  is widely considered the most effective manual method of bird species recognition.
