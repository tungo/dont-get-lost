User.destroy_all
User1 = User.create(username: "person1", password: "password")
User2 = User.create(username: "person2", password: "password")
User3 = User.create(username: "person3", password: "password")
User4 = User.create(username: "person4", password: "password")
User5 = User.create(username: "person5", password: "password")
User6 = User.create(username: "person6", password: "password")
User7 = User.create(username: "person7", password: "password")

Group.destroy_all
Group1 = Group.create(group_name: "group1", creator_id: User1.id)
Group2 = Group.create(group_name: "group2", creator_id: User2.id)
Group3 = Group.create(group_name: "group3", creator_id: User3.id)
Group4 = Group.create(group_name: "group4", creator_id: User4.id)
Group5 = Group.create(group_name: "group5", creator_id: User5.id)
Group6 = Group.create(group_name: "group6", creator_id: User6.id)
Group7 = Group.create(group_name: "group7", creator_id: User7.id)

GroupMember.destroy_all
Member1 = GroupMember.create(user_id: User1.id, group_id: Group2.id)
Member2 = GroupMember.create(user_id: User1.id, group_id: Group3.id)
Member3 = GroupMember.create(user_id: User1.id, group_id: Group4.id)
Member4 = GroupMember.create(user_id: User2.id, group_id: Group3.id)
Member5 = GroupMember.create(user_id: User2.id, group_id: Group4.id)
Member6 = GroupMember.create(user_id: User2.id, group_id: Group5.id)
Member7 = GroupMember.create(user_id: User3.id, group_id: Group1.id)
Member8 = GroupMember.create(user_id: User3.id, group_id: Group2.id)
Member9 = GroupMember.create(user_id: User3.id, group_id: Group4.id)
Member10 = GroupMember.create(user_id: User4.id, group_id: Group5.id)
Member11 = GroupMember.create(user_id: User4.id, group_id: Group6.id)
Member12 = GroupMember.create(user_id: User4.id, group_id: Group1.id)
Member13 = GroupMember.create(user_id: User5.id, group_id: Group1.id)
Member14 = GroupMember.create(user_id: User5.id, group_id: Group2.id)
Member15 = GroupMember.create(user_id: User5.id, group_id: Group6.id)
Member16 = GroupMember.create(user_id: User6.id, group_id: Group3.id)
Member17 = GroupMember.create(user_id: User6.id, group_id: Group4.id)
Member18 = GroupMember.create(user_id: User6.id, group_id: Group5.id)

Invitation.destroy_all
Invitation1 = Invitation.create(inviter_id: User1.id, group_id: Group1.id, invitee_id: User2.id)
Invitation2 = Invitation.create(inviter_id: User1.id, group_id: Group1.id, invitee_id: User6.id)
Invitation3 = Invitation.create(inviter_id: User2.id, group_id: Group2.id, invitee_id: User1.id)
Invitation4 = Invitation.create(inviter_id: User3.id, group_id: Group3.id, invitee_id: User4.id)
Invitation5 = Invitation.create(inviter_id: User4.id, group_id: Group4.id, invitee_id: User3.id)
Invitation6 = Invitation.create(inviter_id: User5.id, group_id: Group5.id, invitee_id: User4.id)
Invitation7 = Invitation.create(inviter_id: User6.id, group_id: Group6.id, invitee_id: User1.id)
Invitation8 = Invitation.create(inviter_id: User7.id, group_id: Group7.id, invitee_id: User1.id)
Invitation9 = Invitation.create(inviter_id: User7.id, group_id: Group7.id, invitee_id: User2.id)
Invitation10 = Invitation.create(inviter_id: User7.id, group_id: Group7.id, invitee_id: User3.id)
Invitation11 = Invitation.create(inviter_id: User7.id, group_id: Group7.id, invitee_id: User4.id)
